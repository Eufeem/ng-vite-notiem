# BUILD STAGE
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# DEPLOY STAGE
FROM nginx:alpine
ADD ./config/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/ng-seven/browser /var/www/app/
EXPOSE 4200
CMD ["nginx", "-g", "daemon off;"]