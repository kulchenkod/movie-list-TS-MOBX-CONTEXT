FROM node:13.8.0

WORKDIR /usr/app

RUN npm install --global pm2

COPY ./package*.json ./

RUN npm install --production

COPY ./ ./

RUN npm run build

EXPOSE 3000

USER node

CMD [ "pm2-runtime", "npm start", "ecosystem.config.js"]