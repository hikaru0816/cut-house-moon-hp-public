import { getCloudflareContext } from '@opennextjs/cloudflare';
import * as schema from '../db/schema';

const getConnectionString = (): string => {
  // 1. process.env から取得
  let connectionString = (process.env['DATABASE_URL'] || '').replace(/"/g, '').trim();

  // 2. Cloudflare Context から取得
  if (!connectionString || connectionString === 'PLACEHOLDER') {
    try {
      const { env } = getCloudflareContext();
      const cfEnv = env as Record<string, unknown>;
      const val = cfEnv.DATABASE_URL;
      if (typeof val === 'string' && val) {
        connectionString = val.replace(/"/g, '').trim();
      }
    } catch {
      // getCloudflareContext が失敗した（またはコンテキスト外）場合は無視して次へ
    }
  }

  // 3. グローバル変数 (globalThis) からの取得
  if (!connectionString || connectionString === 'PLACEHOLDER') {
    const g = globalThis as Record<string, unknown>;
    const val = g.DATABASE_URL;
    if (val && typeof val === 'string') {
      connectionString = val.replace(/"/g, '').trim();
    }
  }

  if (!connectionString || connectionString === 'PLACEHOLDER') {
    throw new Error('Database connection string is missing. Please set DATABASE_URL.');
  }

  return connectionString;
};

const createDbInstance = () => {
  const connectionString = getConnectionString();

  // ローカル開発環境 (npm run dev) では node-postgres を使用
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { drizzle } = require('drizzle-orm/node-postgres');
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { Pool } = require('pg');
    const pool = new Pool({ connectionString });
    return drizzle({ client: pool, schema });
  }

  // 本番環境 (Cloudflare Workers) では Neon serverless を使用
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { neon } = require('@neondatabase/serverless');
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { drizzle } = require('drizzle-orm/neon-http');
  const sql = neon(connectionString);
  return drizzle({ client: sql, schema });
};

declare global {
  var drizzleCloudflare: undefined | ReturnType<typeof createDbInstance>;
}

let dbInstance: ReturnType<typeof createDbInstance> | undefined;

/**
 * Drizzle DB インスタンスをプロキシ経由で提供
 */
const dbProxy = new Proxy({} as ReturnType<typeof createDbInstance>, {
  get(_target, prop, receiver) {
    if (!dbInstance) {
      dbInstance = globalThis.drizzleCloudflare ?? createDbInstance();

      if (process.env.NODE_ENV !== 'production') {
        globalThis.drizzleCloudflare = dbInstance;
      }
    }
    return Reflect.get(dbInstance as object, prop, receiver);
  },
});

export { dbProxy as db };
export default dbProxy;
