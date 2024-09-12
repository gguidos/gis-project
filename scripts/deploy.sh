#!/bin/bash

# Variables
DEPLOY_DIR="/app"
LOCAL_PATH="$DEPLOY_DIR/solelreactmap.tar"
DOCKER_COMPOSE_FILE="$DEPLOY_DIR/docker-compose.yml"
LETSENCRYPT_PATH="$DEPLOY_DIR/nginx/ssl"

# Ensure the necessary directories exist
mkdir -p /app/nginx/ssl

# Generate a self-signed SSL certificate
openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout "$LETSENCRYPT_PATH/privkey.pem" \
    -out "$LETSENCRYPT_PATH/fullchain.pem" \
    -subj "/C=US/ST=State/L=City/O=Organization/OU=Unit/CN=localhost"
if [ $? -ne 0 ]; then
    echo "Error: Failed to generate SSL certificates."
    exit 1
fi

# Load the Docker image
echo "Loading Docker image from $LOCAL_PATH..."
docker load -i "$LOCAL_PATH"
if [ $? -ne 0 ]; then
    echo "Error: Failed to load Docker image."
    exit 1
fi

# Ensure the working directory is correct
cd "$DEPLOY_DIR" || { echo "Error: Failed to change directory to $DEPLOY_DIR."; exit 1; }

# Check if the Docker Compose file exists
if [ ! -f "$DOCKER_COMPOSE_FILE" ]; then
    echo "Error: Docker Compose file $DOCKER_COMPOSE_FILE not found."
    exit 1
fi

# Set up environment variables
export NEXT_PUBLIC_GOOGLE_MAP_API=$(grep NEXT_PUBLIC_GOOGLE_MAP_API .env.local | cut -d '=' -f2)
export NEXT_GOOGLE_MAP_ID=$(grep NEXT_GOOGLE_MAP_ID .env.local | cut -d '=' -f2)

# Stop and remove the existing container if it exists
echo "Stopping and removing existing containers..."
docker-compose down
if [ $? -ne 0 ]; then
    echo "Error: Failed to stop and remove existing containers."
    exit 1
fi

# Remove unused Docker resources to free up space
echo "Removing unused Docker resources..."
docker system prune -f
if [ $? -ne 0 ]; then
    echo "Error: Failed to remove unused Docker resources."
    exit 1
fi

# Run the Docker container
echo "Starting new Docker container..."
docker-compose up -d
if [ $? -ne 0 ]; then
    echo "Error: Failed to start Docker container."
    exit 1
fi

echo "Deployment completed successfully."
