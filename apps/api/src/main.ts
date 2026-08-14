import { Logger } from '@nestjs/common';

import { createApp } from './bootstrap';

async function bootstrap(): Promise<void> {
  const app = await createApp();
  const port: number = Number(process.env.PORT ?? 3333);

  await app.listen(port);

  Logger.log(`API is running at http://localhost:${port}/api`);
}

void bootstrap();
