create table public.projects (
  id text primary key,
  tags text[] not null default '{}',
  stack text[] not null default '{}',
  href text,
  sort_order integer not null unique check (sort_order >= 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  constraint projects_tags_are_supported
    check (tags <@ array['react', 'angular', 'node', 'mobile']::text[])
);

create table public.project_translations (
  project_id text not null
    references public.projects (id)
    on delete cascade,
  lang text not null check (lang in ('en', 'uk')),
  title text not null check (length(trim(title)) > 0),
  meta text not null check (length(trim(meta)) > 0),
  body text not null check (length(trim(body)) > 0),

  primary key (project_id, lang)
);

create index project_translations_lang_project_id_idx
  on public.project_translations (lang, project_id);

alter table public.projects enable row level security;
alter table public.project_translations enable row level security;
