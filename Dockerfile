##
# Build website
##

FROM node:25.2-alpine3.23 AS build

WORKDIR /app
COPY . .

ARG CONTACT_DISCORD_WEBHOOK_URL

RUN echo "VITE_CONTACT_DISCORD_WEBHOOK_URL=${CONTACT_DISCORD_WEBHOOK_URL}" > .env

RUN npm ci && \
    npm run build

##
# Run webserver
##

FROM nginx:1.29-alpine

COPY --chown=nginx:nginx --from=build /app/dist /usr/share/nginx/html
COPY --chown=root:root ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
