FROM oven/bun:latest
WORKDIR /app
COPY bun.lockb package.json ./
RUN bun install --no-save
COPY . .

RUN bun run build

EXPOSE 3000

CMD ["bun", "run", "start"]