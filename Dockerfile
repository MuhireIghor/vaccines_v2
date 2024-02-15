# Use the official Node.js 14 image as a base image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /usr/app

# Copy package.json and pnpm-lock.yaml to the working directory
COPY package.json pnpm-lock.yaml ./

# Install pnpm globally
RUN npm install -g pnpm

# Install app dependencies using pnpm
RUN pnpm install

# Copy the rest of the application code into the container
COPY . .

# Build the Nuxt.js app
RUN pnpm run build

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app  
CMD ["pnpm", "start"]
