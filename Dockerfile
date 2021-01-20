
FROM node:13

WORKDIR /usr/src/app

COPY package.json .

RUN yarn global add gatsby-cli

RUN yarn install

COPY gatsby-config.js .

EXPOSE 8000

CMD ["gatsby", "develop"]