const {asValue} = require('awilix');
const {GlobalConfig, Storage} = require('../config');

module.exports = function configContainer(container){
    container
    .register({
        GlobalConfig: asValue(GlobalConfig),
        Storage: asValue(Storage)
    });
};