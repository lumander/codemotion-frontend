FROM node:latest
WORKDIR /app
COPY . .
RUN npm install && chmod -R 777 /app

CMD ["npm","run","dev"]
