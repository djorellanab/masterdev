const { asFunction } = require('awilix');

const {HomeRoutes} = require('../routes');

module.exports = function routesContainer(container){
    container
    .register({
        HomeRoutes: asFunction(HomeRoutes).singleton(),
    });
};