import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, 'Informe seu nome.')
    .max(100, 'O nome deve ter no máximo 100 caracteres.'),

  email: z.email('Informe um e-mail válido.').max(150),

  subject: z.enum([
    'new-project',
    'budget',
    'consulting',
    'partnership',
    'other',
  ]),

  message: z
    .string()
    .trim()
    .min(20, 'Descreva sua necessidade com mais detalhes.')
    .max(3000, 'A mensagem deve ter no máximo 3000 caracteres.'),

  website: z.string().optional().nullable(),
});

export type ContactSchemaType = z.infer<typeof contactSchema>;
