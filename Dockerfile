# ---------- Build stage ----------
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build -- --configuration production

# ---------- Runtime stage ----------
FROM nginx:alpine AS runtime

ARG APP_NAME=nasa
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/${APP_NAME} /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
