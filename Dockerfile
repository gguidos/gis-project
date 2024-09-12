# Use the official Node.js 20 image as the base image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy only the package.json and yarn.lock first
# This leverages Docker's caching mechanism to avoid reinstalling dependencies if they haven't changed
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the environment variables file
COPY .env.local .env.local

# Copy the rest of the application files
COPY . .

# Build the Next.js application
RUN yarn build

# Expose the port the app runs on
EXPOSE 3000

# Specify the command to run when the container starts
CMD ["yarn", "start"]
