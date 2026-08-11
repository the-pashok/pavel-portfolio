import type { ZodType } from 'zod';

const BASE_URL: string = process.env.NEXT_PUBLIC_API_URL ?? '';

export class ApiError extends Error {
  constructor(message: string, readonly status: number) {
    super(message);
    this.name = 'ApiError';
  }
}

export async function get<T>(
  path: string,
  schema: ZodType<T>,
  init?: RequestInit,
): Promise<T> {
  const res: Response = await fetch(`${BASE_URL}${path}`, {
    ...init,
    headers: {
      Accept: 'application/json',
      ...init?.headers,
    },
  });

  if (!res.ok) {
    throw new ApiError(`GET ${path} failed`, res.status);
  }

  const json = await res.json();

  return schema.parse(json);
}
