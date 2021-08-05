# build environment
FROM node:13.12.0-alpine as build
WORKDIR /app
COPY build build
RUN npm install -g serve


EXPOSE 80
CMD ["serve","-s","build","-l","80"]