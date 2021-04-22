# ShrinkUrl auth service dockerfile
# The server runs on port 8000

FROM node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD ["node", "index.js"]
