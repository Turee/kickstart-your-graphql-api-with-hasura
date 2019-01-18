FROM node:10 AS builder
WORKDIR /app
RUN npm install -g yarn
ADD package.json /app/
ADD yarn.lock /app/
RUN yarn install
ADD . /app/
RUN yarn build

FROM node:10
ENV NODE_ENV=production
WORKDIR /app
ADD package.json /app/
ADD yarn.lock /app/
RUN yarn install
COPY --from=builder /app/dist /app/dist
CMD ["yarn", "start"]
