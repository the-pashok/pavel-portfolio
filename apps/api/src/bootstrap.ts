import { NestFactory } from '@nestjs/core';

import type { INestApplication } from '@nestjs/common';

import { AppModule } from './app/app.module';

export async function createApp(): Promise<INestApplication> {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');

  return app;
}
