#!/bin/bash

# Check if Docker daemon is running
if ! systemctl is-active --quiet docker; then
    echo "Docker daemon is not running. Starting Docker..."
    systemctl start docker
    if ! systemctl is-active --quiet docker; then
        echo "Failed to start Docker daemon."
        exit 1
    fi
else
    echo "Docker daemon is already running."
fi

# Remove all stopped containers
docker container prune -f

# Remove all unused images
docker image prune -af

# Remove all unused volumes
docker volume prune -f

# Remove all unused networks
docker network prune -f

# System-wide cleanup
docker system prune -af
