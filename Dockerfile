FROM node:latest
WORKDIR /app
RUN npm install
RUN npm install --global nodemon
EXPOSE 3000
CMD ["nodemon","npm","start"]

