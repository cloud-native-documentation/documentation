# build
FROM node:14-alpine as build

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

# deploy
FROM node:14-alpine

WORKDIR /app

RUN addgroup -S frontend && adduser -S frontend -G frontend
RUN yarn global add serve

COPY --from=build /app/dist ./dist

ENV NODE_ENV production
ENV PORT 3000

EXPOSE 3000

USER frontend

# Run the React application
CMD ["serve", "-s", "dist"]