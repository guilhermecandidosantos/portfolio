import 'server-only';

import { createHash } from 'node:crypto';

import { headers } from 'next/headers';

export async function getRateLimitIdentifier(email: string): Promise<string> {
  const headersList = await headers();

  const realIp = headersList.get('x-real-ip')?.trim();

  const forwardedFor = headersList.get('x-forwarded-for');

  const forwardedIp = forwardedFor?.split(',').at(0)?.trim();

  const clientIp = realIp || forwardedIp;

  /*
   * O e-mail é usado somente como fallback caso
   * nenhum IP seja fornecido pelo proxy.
   */
  const rawIdentifier = clientIp
    ? `ip:${clientIp}`
    : `email:${email.trim().toLowerCase()}`;

  const salt = process.env.RATE_LIMIT_SALT;

  if (!salt) {
    throw new Error('RATE_LIMIT_SALT is not configured.');
  }

  return createHash('sha256').update(`${salt}:${rawIdentifier}`).digest('hex');
}
