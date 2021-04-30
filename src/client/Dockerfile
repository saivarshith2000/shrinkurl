# build environment
FROM node:alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
CMD HOST=0.0.0.0 PORT=80 npm start