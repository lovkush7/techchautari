FROM node:24-alpine3.22

WORKDIR /app/backend

COPY package*.json ./

RUN npm ci --omit=dev

COPY . .

EXPOSE 8000

CMD [ "npm","start" ]