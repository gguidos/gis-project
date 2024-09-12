#!/bin/bash

# Ensure Docker service is running
systemctl start docker

# Ensure Nginx service is running
systemctl start nginx

# Navigate to the deployment directory and ensure Docker Compose services are running
cd /app
yarn start