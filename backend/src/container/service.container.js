const { asClass } = require('awilix');

const {HomeService} = require('../service');

module.exports = function serviceContainer(container){
    container
    .register({
        HomeService: asClass(HomeService.bind(HomeService)).singleton(),
    });
};