# base image
FROM node:14

# create & set working directory
RUN mkdir -p /usr/src
WORKDIR /usr/src

# copy source files
COPY package.json next.config.js /usr/src
COPY pages /usr/src/pages
COPY styles /usr/src/styles

# install dependencies
RUN npm install

# start app
RUN npm run build
EXPOSE 3000
CMD npm run start