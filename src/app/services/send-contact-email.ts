'use server';

import 'server-only';

import nodemailer from 'nodemailer';

import { env } from '@/env';

import type { ContactSchemaType } from '../schemas/contactSchema';

export async function sendContactEmail(data: ContactSchemaType) {
  const transporter = nodemailer.createTransport({
    host: env.MAIL_HOST,
    port: env.MAIL_PORT,
    secure: env.MAIL_SECURE,
    auth: {
      user: env.MAIL_USERNAME,
      pass: env.MAIL_PASSWORD,
    },
  });

  try {
    await transporter.verify();
    console.info('Server is ready to take our messages');
  } catch (err) {
    console.error('Verification failed:', err);
  }

  const subject = `[Portfolio] ${data.subject.toUpperCase()} - ${data.name}`;

  const currentDate = new Date().toLocaleString('pt-BR', {
    timeZone: 'America/Sao_Paulo',
  });

  const mailHtml = `<span>Nome: ${data.name}</span> <br>
                    <span>E-mail: ${data.email}</span> <br>
                    <span>Assunto: ${data.subject}</span> <br>
                    <span>Mensagem: ${data.message}</span> <br> <br>

                    Enviado em: ${currentDate}`;
  const mailText = mailHtml.replace(/<[^>]+>/g, '');

  try {
    const info = await transporter.sendMail({
      from: env.MAIL_USERNAME,
      to: env.MAIL_USERNAME_TO,
      subject,
      text: mailText,
      html: mailHtml,
      replyTo: data.email,
    });

    console.info('Message sent: %s', info.messageId);
    console.info('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  } catch (err) {
    console.error('Error while sending mail:', err);
  }
}
