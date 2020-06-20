FROM node:12-stretch-slim

#Node dependecies
COPY  yarn.lock package.json ./
RUN yarn install

#Build process
COPY  . .
RUN yarn build

WORKDIR /dist

#Start the app
CMD ["node", "main.js"]