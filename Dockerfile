FROM quay.io/ibmgaragecloud/node:lts-stretch
WORKDIR /app
COPY . .
RUN npm install && chmod -R 777 /app

CMD ["npm","run","dev"]
