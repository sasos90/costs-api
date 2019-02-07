FROM node:10.15.1-alpine

WORKDIR /usr/src/app

COPY . ./

RUN npm install
RUN npm run build
RUN npm install -g pm2

RUN apk add postgresql-client
RUN chmod +x ./scripts/wait-for-pg.sh

EXPOSE 3000
VOLUME /usr/src/app

CMD ["pm2-runtime", "start", "dist/main.js"]
