import type { Metadata } from 'next';

import { ContactPageContent } from '@/app/(app)/contacts/ContactPageContent';

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Entre em contato com Guilherme Cândido dos Santos para projetos web, sistemas corporativos, consultoria, orçamento ou parcerias. Resposta em até 24 horas.',
};

export default function Contacts() {
  return (
    <div>
      <ContactPageContent />
    </div>
  );
}
