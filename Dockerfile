FROM node:latest
WORKDIR /app
RUN npm install nodemon --global
EXPOSE 3000
CMD ["nodemon","npm","start"]
