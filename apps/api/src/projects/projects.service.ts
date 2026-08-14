import { Inject, Injectable, InternalServerErrorException } from '@nestjs/common';

import { SupabaseService } from '../supabase/supabase.service';
import { Project, projectsSchema } from '@pavel-portfolio/contracts';

export type Lang = 'en' | 'uk';

export type ProjectRow = {
  id: string;
  tags: string[];
  stack: string[];
  href: string | null;
  sort_order: number;
};

export type TranslationRow = {
  project_id: string;
  title: string;
  meta: string;
  body: string;
};

@Injectable()
export class ProjectsService {
  constructor(@Inject(SupabaseService) private readonly supabaseService: SupabaseService) {
  }

  public async getProjects(language: Lang): Promise<Array<Project>> {
    const [projectsResult, translationsResult] = await Promise.all([
      this.supabaseService.client
        .from('projects')
        .select('id, tags, stack, href, sort_order')
        .order('sort_order'),
      this.supabaseService.client
        .from('project_translations')
        .select('project_id, title, meta, body')
        .eq('lang', language),
    ]);

    if (projectsResult.error || translationsResult.error) {
      throw new InternalServerErrorException('Failed to fetch projects');
    }

    const projectRow: Array<ProjectRow> = projectsResult.data;
    const translationRow: Array<TranslationRow> = translationsResult.data;

    const translationsByProjectId = new Map(
      translationRow.map((translation: TranslationRow): [string, TranslationRow] => [translation.project_id, translation]),
    );

    return projectsSchema.parse(
      projectRow.map((project: ProjectRow) => {
        const translation: TranslationRow | undefined = translationsByProjectId.get(project.id);

        if (!translation) {
          throw new InternalServerErrorException(
            `Missing ${language} translation for project ${project.id}`,
          );
        }

        return {
          id: project.id,
          tags: project.tags,
          stack: project.stack,
          href: project.href ?? undefined,
          title: translation.title,
          meta: translation.meta,
          body: translation.body,
        };
      }),
    );
  }
}
