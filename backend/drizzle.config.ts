import { configDotenv } from 'dotenv'
import { defineConfig } from 'drizzle-kit';

configDotenv();

export default defineConfig({
  out: './src/drizzle/migrations',
  schema: './src/drizzle/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.NILEDB_URL!,
  },
});
