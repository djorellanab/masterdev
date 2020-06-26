const { asClass } = require('awilix');

const {HomeRepository, MessageRepository, CredentialRepository} = require('../repositories');

module.exports = function repositoriesContainer(container){
    container
    .register({
        CredentialRepository: asClass(CredentialRepository).singleton(),
        HomeRepository: asClass(HomeRepository).singleton(),
        MessageRepository: asClass(MessageRepository).singleton(),
    });
};