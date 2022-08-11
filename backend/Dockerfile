FROM node:16-alpine3.14

WORKDIR /usr/backend

COPY package*.json ./

RUN npm install --location=global npm@latest

COPY . .

CMD [ "npm","start"]
