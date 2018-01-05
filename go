#!/bin/bash

if [ ! -d "app/node_modules" ]
then
    docker-compose run --rm --entrypoint "npm install" app
fi
docker-compose up
