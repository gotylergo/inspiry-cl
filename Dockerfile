FROM node:18-alpine

WORKDIR .

COPY package.json ./

COPY . .

EXPOSE 3000

RUN npm install

CMD npm run start
