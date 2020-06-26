const { asClass } = require('awilix');

const {HomeService, CredentialService} = require('../service');

module.exports = function serviceContainer(container){
    container
    .register({
        CredentialService: asClass(CredentialService.bind(CredentialService)).singleton(),
        HomeService: asClass(HomeService.bind(HomeService)).singleton()
    });
};