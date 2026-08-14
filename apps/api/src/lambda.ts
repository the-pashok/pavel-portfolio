import serverlessExpress from '@codegenie/serverless-express';

import type { Handler } from 'aws-lambda';

import { createApp } from './bootstrap';

type PromiseHandler = (
  event: Parameters<Handler>[0],
  context: Parameters<Handler>[1],
) => Promise<unknown>;

let cachedServer: PromiseHandler | undefined;

async function bootstrap(): Promise<PromiseHandler> {
  const app = await createApp();

  await app.init();

  return serverlessExpress({
    app: app.getHttpAdapter().getInstance(),
    resolutionMode: 'PROMISE',
  }) as unknown as PromiseHandler;
}

export const handler: PromiseHandler = async (event, context) => {
  cachedServer ??= await bootstrap();

  return cachedServer(event, context);
};
