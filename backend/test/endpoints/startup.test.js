let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

chai.use(chaiHttp);

let container = require('../../src/container');
const ServerStartup = container.resolve('ServerStartup');

describe('Instance Server', function (){

    it('Starting Server', function (done)  {
        ServerStartup.start();
        done();
    });
   
});
  
module.exports = ServerStartup;
  
