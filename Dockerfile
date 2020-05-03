# pull official base image
FROM node:13.12.0-alpine

# set working directory
COPY . /usr/src/app
WORKDIR /usr/src/app

# install app dependencies
COPY package*.json ./
RUN npm install --silent

# Inform Docker that the container is listening on the specified port at runtime.
EXPOSE 8080

# start app
CMD ["npm", "start"]