const { asFunction, asClass} = require('awilix');

const { RouterStartup, ServerStartup} = require('../startup');

module.exports = function startupContainer(container){
    container
    .register({
        ServerStartup: asClass(ServerStartup).singleton(),
        RouterStartup: asFunction(RouterStartup).singleton()
    });
};