# Compilation Stage
FROM node:10.19.0-alpine as build-stage

WORKDIR /e_commerce_front
COPY package.json ./
RUN npm i vue@3.2.13 --save
RUN npm install
COPY . .
RUN npm run build

# Production Stage
FROM nginx:1.13.12-alpine as production-stage

COPY --from=build-stage /e_commerce_front/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# docker build -t e_commerce_front .