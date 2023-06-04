# DocManageSystem Frontend Docker Image

This Docker image allows you to run the DocManageSystem frontend application in a containerized environment using Node.js on Alpine Linux.

## Prerequisites

Before running the Docker image, make sure you have the following prerequisites installed:

- [Docker](https://docs.docker.com/get-docker/)

## Usage

1. Build the Docker image:
   ```bash
   docker build -t frontend .
   ```
2. Run the Docker container:
   ```bash
   docker run \
    --name frontend \
    --restart=always \
    -p 3000:3000 \
    -d \
    --env-file .env \
    frontend
   ```
