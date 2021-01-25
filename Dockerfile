
FROM node:13

WORKDIR /app

COPY . .

RUN yarn install

COPY . .

EXPOSE 8000

CMD ["npm", "run", "start:docker"]