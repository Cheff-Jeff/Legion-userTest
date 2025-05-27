FROM oven/bun:latest AS build
WORKDIR /app

RUN apt-get update && apt-get install -y nodejs npm openssl

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --ignore-scripts

COPY . .

RUN bunx prisma generate
RUN bun --bun run build

# copy production dependencies and source code into final image
FROM oven/bun:latest AS production
WORKDIR /app

COPY --from=build /app/.output /app
COPY --from=build /app/lib/generated/prisma /app/lib/generated/prisma
COPY --from=build /app/.env /app

# run the app
EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "--bun", "run", "/app/server/index.mjs" ]
