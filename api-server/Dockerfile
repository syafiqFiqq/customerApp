FROM node:alpine

# Create app directory
WORKDIR /api-server

# Copy app dependencies to app directory
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json /api-server/

# Install app dependencies
RUN npm install

# Bundle app source
COPY . /api-server/

# Server on the App
EXPOSE 5000
CMD [ "npm", "run", "start" ]