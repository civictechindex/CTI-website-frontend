# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /usr/src/app

# install app dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install --silent

# Inform Docker that the container is listening on the specified port at runtime.
EXPOSE 8080

# add app
COPY . .

# start app
CMD ["npm", "start"]