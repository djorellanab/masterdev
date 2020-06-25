const { asClass } = require('awilix');

const {HomeRepository, MessageRepository} = require('../repositories');

module.exports = function repositoriesContainer(container){
    container
    .register({
        HomeRepository: asClass(HomeRepository).singleton(),
        MessageRepository: asClass(MessageRepository).singleton(),
    });
};