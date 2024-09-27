# Start from the official Node.js LTS image
FROM node:lts-alpine3.20

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Expose the listening port
EXPOSE 3000

# The command will be overwritten by docker-compose
CMD ["npm", "run", "dev"]