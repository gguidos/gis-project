#!/bin/bash

# Validate Nginx service
systemctl status nginx

# Validate Docker container is running
docker ps | grep solelreactmap
