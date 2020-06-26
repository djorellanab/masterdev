const { asClass} = require('awilix');

const {HomeController, CredentialController,
    MessageController, TagController} = require('../controller');

module.exports = function controllerContainer(container){
    container
    .register({
        CredentialController: asClass(CredentialController.bind(CredentialController)).singleton(),
        MessageController: asClass(MessageController.bind(MessageController)).singleton(),
        HomeController: asClass(HomeController.bind(HomeController)).singleton(),
        TagController: asClass(TagController.bind(TagController)).singleton()
    });
};