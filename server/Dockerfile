FROM node:22

WORKDIR /app

COPY ./server/ ./
COPY ./shared/ /shared/

RUN npm install

EXPOSE 3000