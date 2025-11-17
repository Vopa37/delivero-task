# Project Setup with Docker Compose

This guide explains how to run the project using Docker Compose. Once the setup is complete, the application will be accessible at `http://localhost:5173`.

## Prerequisites

Make sure you have the following installed:

* [Docker](https://www.docker.com/get-started)
* [Docker Compose](https://docs.docker.com/compose/install/)

## Setup and Run

1. **Run all containers:**
      In root directory of the project execute following command in your terminal:
      ```bash
      docker compose up -d
      ```
   >    This command will build the Docker images and start the containers. You may see logs from the application in your terminal.
   >    The application should now be running and accessible on port 5173.

2. **Access the application:**

   Open your browser and navigate to: [http://localhost:5173](http://localhost:5173)
   

3. **Stopping the application:**

   ```bash
   docker-compose down
````

> This will stop and remove the containers but keep the images intact.
