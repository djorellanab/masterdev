const { asClass } = require('awilix');

const {HomeService, CredentialService,
    MessageService, TagService} = require('../service');

module.exports = function serviceContainer(container){
    container
    .register({
        CredentialService: asClass(CredentialService.bind(CredentialService)).singleton(),
        HomeService: asClass(HomeService.bind(HomeService)).singleton(),
        MessageService: asClass(MessageService.bind(MessageService)).singleton(),
        TagService: asClass(TagService.bind(TagService)).singleton()
    });
};