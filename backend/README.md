# Backend - Test of Master Dev
> This API for the application Master dev

## Technologies
- Node.js 12.16.3
- EcmaScript 6, 7, 8
- Docker
- Docker Compose
- PostgreSQL

## Important Requirements
- **Node.js:** Version 12.16.3 or greater
- **Docker and Docker-compose:** If the developer wants to start the project without install `Node.js` or `postgreSQL` can use docker commands

## Dependencies
- **Express** Framework web for Node.js
- **Express-validator** Framework to validate request params, for example: headers, body (Node.js)
- **object-mapper** Framework for Mapping Entities (Node.js)
- **Awilix** Dependency injection for Node.js
- **dotenv** Package to set enviroments (Node.js)

## Developer Dependencies
- **Mocha js** Framework testing for Node.js
- **Chai js** Plugings of Mochas js (Easy and understanding testing)

## Install without Docker
> This project requires **Node.js** v12.16.3 or greater*
1. If you have [nvm](https://github.com/nvm-sh/nvm) installed do this step otherwise you have to install Node.js v12.16.3 or higher; Use node version for project in file .nvmrc
``` shell
$ nvm use
```
2. Install dependencies
``` shell
$ npm install
```

### Config your Environment variables
> This project use `dotenv` then you have to copy `.env.example` file and rename as `.env` next, you have to set the environment varibles for your case as you required
- **PORT** This is the post to execute the application
- **PROTOCOL** Protocol used for the communication, for example http
- **SITENAME**  Host name of yor site (Default: Local host)

### Run develop
``` shell
$ npm start
```

## Install Docker
> You have to install [Docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/)

#### Config with docker
> This project use `dotenv` then you have to copy `.env.example` file and rename as `.env` next, you have to set the environment varibles for your case as you required.

### Run on testing environment with docker compose
> This command started a docker container testing that contains a ubuntu image with all libraries needed to that the project.

``` shell
$ docker-compose -f docker-compose-test.yml up --build --abort-on-container-exit
```
### Run on development environment with docker compose
> This command started a docker container developing  that contains a ubuntu image with all libraries needed to that the project.

``` shell
$ docker-compose -f docker-compose-develop.yml up --build
```

## Testing
> This project are tested with the frameworks mocha and chai, for executing this project you must execute the next command:
``` shell
$ npm run test
```

### Testing File
> In the end of testing, the command will create a file report (Using in Jtest), where you can find in the carpet: reports/test-report.xml