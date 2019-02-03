FROM node:10.15.1-alpine

WORKDIR /usr/src/app

COPY . ./

RUN npm install
RUN npm run build

RUN apk add postgresql-client

EXPOSE 3000
VOLUME /usr/src/app

CMD ["npm", "run", "start:prod"]
