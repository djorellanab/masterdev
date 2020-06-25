const {asValue} = require('awilix');
const {GlobalConfig} = require('../config');

module.exports = function configContainer(container){
    container
    .register({
        GlobalConfig: asValue(GlobalConfig)
    });
};