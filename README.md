# node-mongo-docker-base

This is meant to be a self-contained setup to get a node/mongo app running in docker service containers.  I made this because I couldn't find the equivalent elsewhere; feel free to point me to The Real Thing if you know about it.

## Usage

The "app" dir will be shared with the app (nodejs) container, which will restart node whenever changes are detected.

MongoDB will set itself up in the mongo container, which uses a shared "data" dir you shouldn't otherwise have to worry about.

Access `http://localhost:3000` and `mongo://localhost:27017` from your host machine to get to the services.

Access `mongo://mongo:27017` from within the app container to use mongo from node.

## Setup

1. Install Docker and Docker-Compose as appropriate for your host OS.  Use the googles; if I list instructions they'll go stale.
1. Install this project with `git clone git@github.com:ibiwan/node-mongo-docker-base.git`
1. In this project's directory, run `./go`

## Making Changes

• If you make changes in the app directory, they should be reflected immediately in your application (refresh the web browser)

• If you make changes in this project's directory, you will need to stop docker with `ctrl-c` and rebuild the setup with `docker-compose build`
(then start up again with `./go`)
