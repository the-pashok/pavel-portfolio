/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: 'pavel-portfolio',
      home: 'aws',
      providers: {
        aws: {
          region: 'eu-central-1',
        },
      },
      removal: input.stage === 'production' ? 'retain' : 'remove',
    };
  },

  async run() {
    const supabaseUrl = new sst.Secret('SupabaseUrl');
    const supabaseSecretKey = new sst.Secret('SupabaseSecretKey');

    const api = new sst.aws.Function('Api', {
      handler: 'apps/api/src/lambda.handler',
      timeout: '15 seconds',
      memory: '1024 MB',
      link: [supabaseUrl, supabaseSecretKey],
      url: {
        cors: {
          allowMethods: ['GET', 'POST'],
          allowOrigins: [
            'http://localhost:3000',
            'https://pavel-portfolio-alpha.vercel.app',
          ],
          allowHeaders: ['content-type'],
        },
      },
      nodejs: {
        esbuild: {
          external: [
            'class-transformer',
            'class-validator',
            '@nestjs/microservices',
            '@nestjs/websockets',
            '@nestjs/platform-socket.io',
          ],
        },
      },
    });

    return {
      apiUrl: api.url,
    };
  },
});
