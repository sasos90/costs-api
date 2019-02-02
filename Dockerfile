FROM node:10.15.1

WORKDIR /usr/src/app

COPY . ./

RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
