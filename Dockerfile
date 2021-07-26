FROM quay.io/ibmgaragecloud/node:lts-stretch  as build
WORKDIR /app
COPY . .
RUN npm install

CMD ["npm","run","dev"]
