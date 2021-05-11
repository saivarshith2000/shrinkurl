FROM node:alpine
# install inotify-utils for nodemon file watching
RUN apk add inotify-tools
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN chmod +x startup.sh
EXPOSE 8000
ENTRYPOINT ["/bin/sh", "startup.sh", "dev"]
