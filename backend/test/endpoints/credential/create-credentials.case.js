let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

const config = require('../../../src/config');

chai.use(chaiHttp);

module.exports = {
    createCredentialCase: function(){
        let key = "key1";
        describe('Cases for create a credential', function (){
            let url = null;
            before(function(done){
                url = `${config.GlobalConfig.PROTOCOL}://${config.GlobalConfig.SITENAME}:${config.GlobalConfig.PORT}`;
                done();
            });

            it('Key is not present', function (done)  {
                chai.request(url)
                    .put('/credential')
                    .send({key, shared_secret:"1S_S3CR3T" })
                    .end((err, res) =>{
                        res.should.have.status(204);
                        done();
                    });
            });
        });

        describe('Cases for credential that it was created', function (){
            let url = null;
            
            before(function(done){
                url = `${config.GlobalConfig.PROTOCOL}://${config.GlobalConfig.SITENAME}:${config.GlobalConfig.PORT}`;
                done();
            });

            it('Key is not present', function (done)  {
                chai.request(url)
                    .put('/credential')
                    .send({key, shared_secret:"1S_S3CR3Te"})
                    .end((err, res) =>{
                        res.should.have.status(403);
                        done();
                    });
            });
        });


        describe('Entity credential invalids', function (){
            let url = null;
            
            before(function(done){
                url = `${config.GlobalConfig.PROTOCOL}://${config.GlobalConfig.SITENAME}:${config.GlobalConfig.PORT}`;
                done();
            });

            it('doesnt has key', function (done)  {
                chai.request(url)
                    .put('/credential')
                    .send({shared_secret:"secret"})
                    .end((err, res) =>{
                        res.should.have.status(422);
                        done();
                    });
            });

            it('Key empty', function (done)  {
                chai.request(url)
                    .put('/credential')
                    .send({key:'', shared_secret:"secret"})
                    .end((err, res) =>{
                        res.should.have.status(422);
                        done();
                    });
            });
        });
    }
}
