let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();


const close = function (server) {
  describe('shutdown server', function (){
    it('server stop',function (done){
        server.stop();
        done();
    });
  });
};

module.exports = close;
