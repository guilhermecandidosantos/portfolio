import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    NODE_ENV: z
      .enum(['development', 'production', 'test'])
      .default('development'),
    REDIS_PASSWORD: z.string().min(1),
    REDIS_URL: z.url(),
    MAIL_HOST: z.string().min(1),
    MAIL_PORT: z.coerce.number().min(1).default(465),
    MAIL_SECURE: z.coerce.boolean(),
    MAIL_USERNAME: z.email(),
    MAIL_PASSWORD: z.string().min(1),
    MAIL_USERNAME_TO: z.email(),
    SITE_URL: z.url(),
  },
  client: {},
  shared: {},
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    REDIS_PASSWORD: process.env.REDIS_PASSWORD,
    REDIS_URL: process.env.REDIS_URL,
    MAIL_HOST: process.env.MAIL_HOST,
    MAIL_PORT: process.env.MAIL_PORT,
    MAIL_SECURE: process.env.MAIL_SECURE,
    MAIL_USERNAME: process.env.MAIL_USERNAME,
    MAIL_PASSWORD: process.env.MAIL_PASSWORD,
    MAIL_USERNAME_TO: process.env.MAIL_USERNAME_TO,
    SITE_URL: process.env.SITE_URL,
  },
  emptyStringAsUndefined: true,
  // Pula a validação durante o build do Next.js
  // As variáveis server-side só são necessárias em runtime
  skipValidation:
    !!process.env.SKIP_ENV_VALIDATION ||
    process.env.npm_lifecycle_event === 'build',
});
