import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const envSchema = z.object({
  PORT: z.string(),
  SUPABASE_URL: z.string(),
  SUPABASE_KEY: z.string(),
  NODE_ENV: z.string(),
  JWT_SECRET: z.string(),
});

const env = envSchema.parse(process.env);
export type EnvSchemaType = z.infer<typeof envSchema>;

export default {
  PORT: env.PORT,
  SUPABASE_URL: env.SUPABASE_URL,
  SUPABASE_KEY: env.SUPABASE_KEY,
  NODE_ENV: env.NODE_ENV,
  JWT_SECRET: env.JWT_SECRET,
  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },
  api: {
    prefix: '/api',
  },
};
