# Pavel Tseluiko Portfolio

Personal bilingual portfolio built as an Nx monorepo. The frontend is a Next.js application; projects are served by a NestJS Lambda and stored in Supabase PostgreSQL.

## Architecture

```text
apps/web          Next.js 16, React 19, TanStack Query, Zustand, Tailwind CSS v4
apps/api          NestJS API deployed as an AWS Lambda Function URL through SST
libs/contracts    Shared Zod schemas and TypeScript types
supabase          PostgreSQL migrations and portfolio project data
```

The frontend requests projects from the API and validates the response with the shared Zod schema. Localized content bundled with the frontend remains a fallback if the API is unavailable.

## Requirements

- Node.js 20 or newer
- npm
- AWS CLI credentials for SST deployment
- Supabase CLI for migrations

## Setup

```bash
npm install
cp apps/web/.env.example apps/web/.env.local
```

Set `NEXT_PUBLIC_API_URL` in `apps/web/.env.local` to a Function URL with the `/api` suffix:

```dotenv
NEXT_PUBLIC_API_URL=https://your-api-url/api
```

This is a public browser variable. Supabase credentials stay in SST secrets and must never be added to a frontend environment file.

## Development

Start the frontend:

```bash
npm run dev
```

Start the Lambda locally with SST and its linked secrets:

```bash
npx sst dev --stage dev
```

## Validation

```bash
npx nx lint web
npx nx build web
npx tsc --project apps/api/tsconfig.app.json --noEmit
npx nx build api
npx nx test api
```

## Database

After linking the Supabase project, apply migrations:

```bash
npx supabase db push
```

Migrations create the `projects` and `project_translations` tables and insert the English and Ukrainian portfolio data. Row Level Security is enabled; only the server-side Supabase secret may read the data.

## API

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/api/health` | Lambda health check |
| GET | `/api/projects?lang=en` | English project cards |
| GET | `/api/projects?lang=uk` | Ukrainian project cards |

`lang` accepts only `en` and `uk`; another value returns HTTP `400`.

## Deployment

Deploy the backend to the SST development stage:

```bash
npx sst deploy --stage dev
```

The frontend is intended for Vercel through its GitHub integration. Set `NEXT_PUBLIC_API_URL` in Vercel and add the Vercel production domain to the Lambda CORS origins in `sst.config.ts` before production deployment.
