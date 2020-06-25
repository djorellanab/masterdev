const container = require('./src/container');
const ServerStartup = container.resolve('ServerStartup');

ServerStartup.start();