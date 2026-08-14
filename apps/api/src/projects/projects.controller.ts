import { BadRequestException, Controller, Get, Inject, Query } from '@nestjs/common';

import { ProjectsService } from './projects.service';

import type { Project } from '@pavel-portfolio/contracts';

@Controller('projects')
export class ProjectsController {
  constructor(@Inject(ProjectsService) private projectsService: ProjectsService) {}

  @Get()
  public get(@Query('lang') lang?: string): Promise<Array<Project>> {
    const language: string = lang ?? 'en';

    if (language !== 'en' && language !== 'uk') {
      throw new BadRequestException("Language must be 'en' or 'uk'");
    }

    return this.projectsService.getProjects(language);
  }
}
