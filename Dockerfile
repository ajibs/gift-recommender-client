FROM node:8.12.0

RUN mkdir /src
WORKDIR /src

COPY package*.json ./

RUN npm install

COPY . /src

EXPOSE 3000

CMD npm run setup:prod
