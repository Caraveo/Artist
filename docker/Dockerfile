FROM node:18 AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

FROM node:18-slim

WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/src/server.js ./src/server.js

RUN npm install --production --legacy-peer-deps

EXPOSE 3000
CMD ["npm", "start"] 