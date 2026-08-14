import { Module } from '@nestjs/common';

import { SupabaseModule } from '../supabase/supabase.module';
import { ProjectsModule } from '../projects/projects.module';

import { HealthController } from './health.controller';

@Module({
  imports: [SupabaseModule, ProjectsModule],
  controllers: [HealthController],
})
export class AppModule {}
