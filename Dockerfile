FROM node:8.12.0

RUN mkdir /src
WORKDIR /src
COPY . /src

RUN npm install

EXPOSE 3000

CMD ['npm', 'start']
