FROM node:25.6.1 AS builder

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

# Production stage
FROM node:25.6.1

WORKDIR /app

RUN npm install -g serve

COPY --from=builder /app/dist ./dist

EXPOSE 80

CMD [ "serve", "-s", "dist", "-l", "80" ]
