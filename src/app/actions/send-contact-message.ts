'use server';

import 'server-only';

import { z } from 'zod';

import { checkContactRateLimit } from '@/lib/contact-rate-limit';
import { getRateLimitIdentifier } from '@/lib/get-rate-limit-identifier';

import { contactSchema, ContactSchemaType } from '../schemas/contactSchema';
import { sendContactEmail } from '../services/send-contact-email';

interface ContactActionState {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
  retryAfterSeconds?: number;
}

type ContactFieldErrors = {
  name?: string[];
  email?: string[];
  subject?: string[];
  message?: string[];
};

function convertZodErrorToFieldErrors(
  error: z.ZodError<ContactSchemaType>,
): ContactFieldErrors {
  const { fieldErrors } = z.flattenError(error);

  return {
    name: fieldErrors.name ?? [],
    email: fieldErrors.email ?? [],
    subject: fieldErrors.subject ?? [],
    message: fieldErrors.message ?? [],
  };
}

export async function sendContactMessageAction(
  formData: FormData,
): Promise<ContactActionState> {
  const parsedData = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
    website: formData.get('website'),
  });

  console.log('Parsed data:', parsedData);

  if (!parsedData.success) {
    return {
      success: false,
      message: 'Verifique os campos informados.',
      errors: convertZodErrorToFieldErrors(parsedData.error),
    };
  }

  if (parsedData.data.website) {
    return {
      success: true,
      message: 'Mensagem enviada com sucesso.',
    };
  }

  try {
    const identifier = await getRateLimitIdentifier(parsedData.data.email);

    const rateLimit = await checkContactRateLimit(identifier);

    if (!rateLimit.allowed) {
      const retryAfterMinutes = Math.max(
        1,
        Math.ceil(rateLimit.retryAfterSeconds / 60),
      );

      return {
        success: false,
        message:
          `Você realizou muitos envios. ` +
          `Tente novamente em aproximadamente ` +
          `${retryAfterMinutes} minuto(s).`,
        retryAfterSeconds: rateLimit.retryAfterSeconds,
      };
    }
  } catch (error) {
    console.error('Contact rate limit failed:', {
      message: error instanceof Error ? error.message : 'Unknown error',
    });

    return {
      success: false,
      message:
        'O serviço de contato está temporariamente indisponível. Tente novamente em alguns instantes.',
    };
  }

  try {
    await sendContactEmail({
      name: parsedData.data.name,
      email: parsedData.data.email,
      subject: parsedData.data.subject,
      message: parsedData.data.message,
    });

    return {
      success: true,
      message: 'Mensagem enviada com sucesso.',
    };
  } catch (error) {
    console.error('Failed to send contact message:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      sentAt: new Date().toISOString(),
    });

    return {
      success: false,
      message:
        'Não foi possível enviar sua mensagem. Tente novamente em alguns instantes.',
    };
  }
}
