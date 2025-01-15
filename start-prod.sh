#!/bin/bash

# Start Angular Frontend
cd car-service-center-Angular-front
echo "Starting Angular frontend..."
nohup npm run start-production &  # Run in detached mode
cd ..

# Start Express Backend
cd car-service-center-Express-back
echo "Starting Express backend..."
nohup npm run start-production &  # Run in detached mode

exit
