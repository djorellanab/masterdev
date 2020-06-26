const { asFunction } = require('awilix');

const {HomeRoutes, CredentialRoutes, MessageRoutes,
    TagRoutes} = require('../routes');

module.exports = function routesContainer(container){
    container
    .register({
        CredentialRoutes: asFunction(CredentialRoutes).singleton(),
        MessageRoutes: asFunction(MessageRoutes).singleton(),
        HomeRoutes: asFunction(HomeRoutes).singleton(),
        TagRoutes: asFunction(TagRoutes).singleton()
    });
};