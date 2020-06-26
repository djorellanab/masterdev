const { asClass } = require('awilix');

const {HomeRepository, MessageRepository,
     CredentialRepository, TagRepository} = require('../repositories');

module.exports = function repositoriesContainer(container){
    container
    .register({
        CredentialRepository: asClass(CredentialRepository).singleton(),
        HomeRepository: asClass(HomeRepository).singleton(),
        MessageRepository: asClass(MessageRepository).singleton(),
        TagRepository: asClass(TagRepository).singleton()
    });
};