# Prisma

Dit creëert je MySQL-tabellen op basis van het Prisma schema.

```bash
bunx prisma migrate dev --name init
```

Prisma Docs
<a href="https://www.prisma.io/docs/getting-started">prisma getting-started</a>

# Maak docker database export:

```bash
docker exec mysql-legion /usr/bin/mysqldump -u root --password=root_password legion-db > backup.sql
```

# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more..

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
