FROM node:24-alpine3.22

WORKDIR /app/Frontend

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 8000

CMD [ "npm","run","dev" ]