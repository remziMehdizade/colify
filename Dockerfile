FROM node:18.18.0-alpine as builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --frozen-lockfile


COPY . .



FROM node:18.18.0-alpine

EXPOSE 3000

WORKDIR /myapp


COPY --from=builder /app/node_modules ./
COPY --from=builder /app/package*.json ./
COPY --from=builder /app ./



# Uygulamayı çalıştırın
CMD ["node", "./src/app.js"]
