FROM node:18-alpine

ARG DB_PASSWORD

ENV DB_PASSWORD ${DB_PASSWORD}

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 8080

ENTRYPOINT ["yarn", "run", "start:prod"]