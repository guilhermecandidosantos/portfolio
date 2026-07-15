import 'server-only';

import { getRedisClient } from './redis';

const MAX_REQUESTS = 3;
const WINDOW_IN_SECONDS = 15 * 60;
const WINDOW_IN_MILLISECONDS = WINDOW_IN_SECONDS * 1000;

interface ContactRateLimitResult {
  allowed: boolean;
  limit: number;
  remaining: number;
  retryAfterSeconds: number;
}

/*
 * Executa INCR e PEXPIRE de maneira atômica.
 *
 * Isso evita o cenário em que o contador seja incrementado,
 * mas a expiração não seja configurada.
 */
const rateLimitScript = `
  local current = redis.call('INCR', KEYS[1])

  if current == 1 then
    redis.call('PEXPIRE', KEYS[1], ARGV[1])
  end

  local ttl = redis.call('PTTL', KEYS[1])

  return { current, ttl }
`;

export async function checkContactRateLimit(
  identifier: string,
): Promise<ContactRateLimitResult> {
  const redis = await getRedisClient();

  const key = `rate-limit:contact:${identifier}`;

  const result = (await redis.eval(rateLimitScript, {
    keys: [key],
    arguments: [String(WINDOW_IN_MILLISECONDS)],
  })) as [number, number];

  const [currentRequests, ttlInMilliseconds] = result;

  const allowed = currentRequests <= MAX_REQUESTS;

  return {
    allowed,
    limit: MAX_REQUESTS,

    remaining: Math.max(0, MAX_REQUESTS - currentRequests),

    retryAfterSeconds: allowed
      ? 0
      : Math.max(1, Math.ceil(ttlInMilliseconds / 1000)),
  };
}
