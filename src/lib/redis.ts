import 'server-only';

import { createClient, type RedisClientType } from 'redis';

import { env } from '@/env';

const globalForRedis = globalThis as typeof globalThis & {
  redisClient?: RedisClientType;
  redisConnection?: Promise<RedisClientType>;
};

const redisClient =
  globalForRedis.redisClient ??
  createClient({
    url: env.REDIS_URL,
  });

redisClient.on('error', (error) => {
  console.error('Redis connection error:', {
    message: error instanceof Error ? error.message : 'Unknown Redis error',
  });
});

if (process.env.NODE_ENV !== 'production') {
  globalForRedis.redisClient = redisClient;
}

export async function getRedisClient(): Promise<RedisClientType> {
  if (redisClient.isOpen) {
    return redisClient;
  }

  globalForRedis.redisConnection ??= redisClient.connect();

  try {
    await globalForRedis.redisConnection;

    return redisClient;
  } catch (error) {
    globalForRedis.redisConnection = undefined;

    throw error;
  }
}
