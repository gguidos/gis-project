#!/bin/bash

# Define the application directory to be removed
APP_DIR="/app"

# Check if the application directory exists and remove it
if [ -d "$APP_DIR" ]; then
    echo "Removing old application directory: $APP_DIR"
    rm -rf "$APP_DIR"
else
    echo "Application directory $APP_DIR does not exist. Skipping removal."
fi
