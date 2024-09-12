#!/bin/bash

# Remove old CodeDeploy agent logs
find /opt/codedeploy-agent/deployment-root/deployment-logs/ -type f -mtime +1 -exec rm {} \;

# Remove old CodeDeploy deployments
find /opt/codedeploy-agent/deployment-root/ -mindepth 1 -maxdepth 1 -type d -mtime +1 -exec rm -rf {} \;
