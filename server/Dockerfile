# Use Node.js as the base image
FROM node:lts-alpine3.20

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 3001

# The command will be overwritten by docker-compose
CMD ["npm", "run", "start:dev"]