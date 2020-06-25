const { createContainer } = require('awilix');
const container = createContainer();

const configContainer = require('./config.container');
const controllerContainer = require('./controller.container');
const repositoriesContainer = require('./repositories.container');
const routesContainer = require('./routes.container');
const serviceContainer = require('./service.container');
const startupContainer = require('./startup.container');

configContainer(container);
controllerContainer(container);
repositoriesContainer(container);
routesContainer(container);
serviceContainer(container);
startupContainer(container);

module.exports = container;