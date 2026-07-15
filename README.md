# Portfólio de Guilherme Cândido dos Santos

Aplicação web de portfólio profissional para apresentar a atuação de Guilherme Cândido dos Santos como desenvolvedor fullstack e analista de sistemas. O site reúne experiência com sistemas corporativos e ERP Senior, stack técnica, trajetória profissional e um canal de contato por e-mail.

## Índice

- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Páginas e rotas](#páginas-e-rotas)
- [Arquitetura](#arquitetura)
- [Pré-requisitos](#pré-requisitos)
- [Configuração local](#configuração-local)
- [Variáveis de ambiente](#variáveis-de-ambiente)
- [Comandos](#comandos)
- [Formulário de contato](#formulário-de-contato)
- [SEO](#seo)
- [Deploy](#deploy)
- [Estrutura de diretórios](#estrutura-de-diretórios)

## Funcionalidades

- Página inicial com apresentação, tecnologias utilizadas e animações de interface.
- Página "Sobre" com perfil profissional, experiência em ERP Senior, trajetória e tópicos de estudo atuais.
- Página de contato com formulário para novos projetos, orçamentos, consultorias, parcerias e outros assuntos.
- Validação dos dados do formulário no servidor com Zod.
- Envio de e-mail por SMTP com Nodemailer e `replyTo` configurado para o e-mail do remetente.
- Proteção antispam por campo honeypot e limite de 3 solicitações por 15 minutos, armazenado no Redis.
- Identificador de limite baseado no IP encaminhado pelo proxy; se indisponível, usa o e-mail do visitante. O valor é convertido em hash SHA-256 com salt antes de ser persistido.
- Layout responsivo, tema escuro, acessibilidade básica e respeito à preferência de redução de movimento nas animações.
- Metadados por página, `sitemap.xml`, `robots.txt` e página 404.
- Pipeline de deploy para VPS ao receber alterações na branch `main`.

## Tecnologias

| Área | Tecnologias |
| --- | --- |
| Framework | Next.js 16, React 19, App Router |
| Linguagem | TypeScript com modo estrito |
| Estilos | Tailwind CSS 4 e CSS custom properties |
| Animações | Motion |
| Ícones | Lucide React e React Icons |
| Formulários | Server Actions, Zod e hook local com `useTransition` |
| E-mail | Nodemailer via SMTP |
| Rate limit | Redis 7 e script Lua atômico |
| Qualidade | ESLint, Prettier e Simple Import Sort |
| Pacotes | pnpm |

## Páginas e rotas

| Rota | Descrição |
| --- | --- |
| `/` | Apresentação profissional e stack principal. |
| `/about` | Perfil, experiência com ERP Senior, diferenciais, trajetória e foco atual. |
| `/contacts` | Formulário de contato, e-mail e links sociais. |
| `/projects` | Rota reservada; atualmente exibe somente o título "Projetos". |
| `/sitemap.xml` | Sitemap gerado pelo Next.js. |
| `/robots.txt` | Regras para rastreadores e referência ao sitemap. |

## Arquitetura

O projeto usa o App Router do Next.js. O grupo de rotas `src/app/(app)` compartilha o layout global com cabeçalho, rodapé, fonte Inter e metadados base. Componentes interativos são Client Components; a operação de contato permanece no servidor por meio de uma Server Action.

Fluxo do formulário:

1. O cliente coleta os dados e inicia uma transição React.
2. `sendContactMessageAction` valida os campos com `contactSchema`.
3. Envios que preenchem o honeypot são tratados como sucesso sem disparar e-mail.
4. O identificador do visitante é obtido de `x-real-ip` ou `x-forwarded-for`, recebe hash com `RATE_LIMIT_SALT` e é consultado no Redis.
5. Um script Lua executa `INCR` e `PEXPIRE` atomicamente para aplicar o limite de 3 envios em 15 minutos.
6. Se permitido, Nodemailer envia a mensagem ao destinatário configurado em `MAIL_USERNAME_TO`.

## Pré-requisitos

- Node.js 20.9 ou superior.
- pnpm 9 ou superior.
- Redis 7 para o limite de requisições do formulário.
- Acesso a um servidor SMTP para o envio de e-mails.

## Configuração local

1. Instale as dependências:

   ```bash
   pnpm install
   ```

2. Crie o arquivo de ambiente a partir do exemplo:

   ```bash
   cp .env.example .env
   ```

3. Complete as [variáveis de ambiente](#variáveis-de-ambiente), incluindo `MAIL_USERNAME_TO` e `SITE_URL`.

4. Inicie o Redis com Docker Compose:

   ```bash
   docker compose up -d
   ```

5. Execute o servidor de desenvolvimento:

   ```bash
   pnpm dev
   ```

6. Acesse [http://localhost:3000](http://localhost:3000).

## Variáveis de ambiente

O arquivo `env.ts` valida as variáveis de servidor em tempo de execução. Nenhuma delas é exposta ao navegador.

| Variável | Obrigatória | Descrição | Exemplo |
| --- | --- | --- | --- |
| `REDIS_PASSWORD` | Sim | Senha definida no container Redis. | `uma-senha-forte` |
| `REDIS_URL` | Sim | URL de conexão com Redis. | `redis://:uma-senha-forte@127.0.0.1:6379` |
| `RATE_LIMIT_SALT` | Sim em runtime | Segredo usado para gerar o hash do identificador de rate limit. | `um-segredo-longo-e-aleatorio` |
| `MAIL_HOST` | Sim | Host SMTP. | `smtp.example.com` |
| `MAIL_PORT` | Sim | Porta SMTP. O padrão de validação é `465`. | `465` |
| `MAIL_SECURE` | Sim | Use `true` para SMTP com TLS implícito, normalmente na porta 465. | `true` |
| `MAIL_USERNAME` | Sim | Usuário/remetente SMTP. | `contato@example.com` |
| `MAIL_PASSWORD` | Sim | Senha ou senha de aplicativo SMTP. | `senha-do-smtp` |
| `MAIL_USERNAME_TO` | Sim | Destinatário das mensagens do formulário. | `contato@example.com` |
| `SITE_URL` | Sim | URL pública absoluta usada por sitemap e robots. | `https://example.com` |

`NODE_ENV` é aceita como `development`, `production` ou `test` e tem `development` como padrão.

Exemplo completo para desenvolvimento:

```dotenv
REDIS_PASSWORD=senha-local
REDIS_URL=redis://:senha-local@127.0.0.1:6379
RATE_LIMIT_SALT=troque-por-um-segredo-longo

MAIL_HOST=smtp.example.com
MAIL_PORT=465
MAIL_SECURE=true
MAIL_USERNAME=contato@example.com
MAIL_PASSWORD=senha-do-smtp
MAIL_USERNAME_TO=contato@example.com

SITE_URL=http://localhost:3000
```

> Os arquivos `.env*` são ignorados pelo Git, exceto `.env.example`. Nunca versione credenciais reais.

## Comandos

| Comando | Descrição |
| --- | --- |
| `pnpm dev` | Inicia o servidor Next.js em modo de desenvolvimento. |
| `pnpm build` | Gera a versão otimizada para produção. A validação das variáveis é ignorada somente durante este build. |
| `pnpm start` | Inicia a aplicação compilada, vinculada a `127.0.0.1`. Use um proxy reverso para expô-la publicamente. |
| `pnpm lint` | Executa ESLint e aplica correções automáticas em arquivos `.ts` e `.tsx`. |
| `docker compose up -d` | Cria e inicia o Redis local com persistência AOF. |
| `docker compose down` | Para e remove o container Redis, preservando o volume nomeado. |

Para validar uma entrega de produção localmente:

```bash
pnpm build
pnpm start
```

## Formulário de contato

Os campos aceitos são:

| Campo | Regra |
| --- | --- |
| Nome | Entre 3 e 100 caracteres. |
| E-mail | E-mail válido com até 150 caracteres. |
| Assunto | `new-project`, `budget`, `consulting`, `partnership` ou `other`. |
| Mensagem | Entre 20 e 3000 caracteres. |

O campo `website` faz parte do schema como honeypot, embora não seja exibido no formulário atual. Quando preenchido, a solicitação é encerrada sem envio de e-mail. O Redis é necessário em runtime: se estiver indisponível, o envio é bloqueado para evitar que o rate limit seja contornado por falha de infraestrutura.

Em produção, configure o proxy reverso para encaminhar `x-real-ip` ou `x-forwarded-for`; esses cabeçalhos permitem limitar requisições por origem.

## SEO

- Idioma do documento: `pt-BR`.
- Metadados base com título, descrição, autor, keywords, Open Graph e Twitter Card.
- Metadados específicos para as páginas inicial, Sobre e Contato.
- `sitemap.xml` inclui `/`, `/about` e `/contacts`, a partir de `SITE_URL`.
- `robots.txt` permite rastreamento geral, bloqueia `/api/` e referencia o sitemap.

## Deploy

O workflow `.github/workflows/deploy.yml` é executado a cada push para `main`. Ele conecta-se por SSH à VPS e realiza, em `/opt/portfolio/`:

```text
git pull origin main
pnpm install --frozen-lockfile
pnpm run build
systemctl restart docker
systemctl restart portfolio
```

Os seguintes secrets devem existir no repositório do GitHub:

| Secret | Descrição |
| --- | --- |
| `HOST` | Host ou IP da VPS. |
| `USERNAME` | Usuário SSH. |
| `KEY` | Chave privada SSH. |
| `PORT` | Porta SSH. |

O servidor de destino precisa ter o repositório clonado em `/opt/portfolio/`, Node.js 24.18.0 e pnpm no caminho configurado pelo workflow, Docker com o container `portfolio-redis`, um serviço systemd chamado `portfolio` e as variáveis de produção disponíveis para a aplicação.

## Estrutura de diretórios

```text
.
├── .github/workflows/deploy.yml    # Deploy contínuo para VPS
├── public/                         # Imagens e ícones estáticos
├── src/
│   ├── app/
│   │   ├── (app)/                  # Layout e páginas públicas
│   │   ├── actions/                # Server Actions
│   │   ├── hooks/                  # Hooks de interface
│   │   ├── schemas/                # Schemas Zod
│   │   ├── services/               # Integrações de servidor, como SMTP
│   │   ├── globals.css             # Tokens visuais e estilos globais
│   │   ├── robots.ts               # Rota robots.txt
│   │   └── sitemap.ts              # Rota sitemap.xml
│   ├── components/                 # Componentes reutilizáveis e animações
│   └── lib/                        # Cliente Redis e rate limiting
├── docker-compose.yml              # Redis local
├── env.ts                          # Schema e acesso tipado às variáveis
├── next.config.ts                  # Configuração do Next.js
├── package.json                    # Scripts e dependências
└── pnpm-lock.yaml                  # Lockfile de dependências
```

## Licença

Este repositório está marcado como privado no `package.json` e não declara uma licença. Todos os direitos permanecem reservados até que uma licença seja adicionada explicitamente.
