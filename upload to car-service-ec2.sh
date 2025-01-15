#!/bin/bash

# Define variables
EXCLUDE_FILE="exclude.txt"
REMOTE_USER="ubuntu"
REMOTE_HOST="ec2-13-211-69-158.ap-southeast-2.compute.amazonaws.com"
REMOTE_DIR="~/car-service"
SSH_KEY="./car-service.pem"

# Run rsync with excludes from file
rsync -avz --exclude-from="$EXCLUDE_FILE" -e "ssh -i $SSH_KEY" . $REMOTE_USER@$REMOTE_HOST:$REMOTE_DIR
