FROM node:alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN chmod +x startup.sh
EXPOSE 8000
ENTRYPOINT ["/bin/sh", "startup.sh"]
