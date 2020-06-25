const { asClass} = require('awilix');

const {HomeController} = require('../controller');

module.exports = function controllerContainer(container){
    container
    .register({
        HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    });
};