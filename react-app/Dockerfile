FROM node:latest

# Create app directory
WORKDIR /react-app

# Copy app dependencies to app directory
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json /react-app/

# Install app dependencies
RUN npm install

# Bundle app source
COPY . /react-app/

# Server on the App
EXPOSE 3000
CMD [ "npm", "run", "start" ]