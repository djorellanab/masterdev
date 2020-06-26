let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

const config = require('../../../src/config');

chai.use(chaiHttp);

module.exports = {
    createMessageCase: function(){
        describe("Create messages", function(){
            let url = null;
            before(function(done){
                url = `${config.GlobalConfig.PROTOCOL}://${config.GlobalConfig.SITENAME}:${config.GlobalConfig.PORT}`;
                done();
            });

            it('Message with tag doesn exist', function (done)  {
                chai.request(url)
                    .post('/messages')
                    .set('X-Key', `key1`)
                    .send({msg:"invalid tag", tags:[4]})
                    .end((err, res) =>{
                        res.should.have.status(422);
                        done();
                    });
            });

            it('message not authenticate', function (done)  {
                chai.request(url)
                    .post('/messages')
                    .set('X-Key', `noKey`)
                    .send({msg:"invalid key", tags:[1,2]})
                    .end((err, res) =>{
                        res.should.have.status(403);
                        done();
                    });
            });

            it('Message 1', function (done)  {
                chai.request(url)
                    .post('/messages')
                    .set('X-Key', `key1`)
                    .send({msg:"mensaje 1", tags:[1,2]})
                    .end((err, res) =>{
                        res.should.have.status(200);
                        res.header["x-signature"].should.be.a("string");
                        res.header["x-key"].should.be.a("string");
                        res.header["x-route"].should.be.a("string");
                        done();
                    });
            });

            it('Message 2', function (done)  {
                chai.request(url)
                    .post('/messages')
                    .set('X-Key', `key1`)
                    .send({msg:"mensaje 2", tags:[1]})
                    .end((err, res) =>{
                        res.should.have.status(200);
                        res.header["x-signature"].should.be.a("string");
                        res.header["x-key"].should.be.a("string");
                        res.header["x-route"].should.be.a("string");
                        done();
                    });
            });

            it('Message 3', function (done)  {
                chai.request(url)
                    .post('/messages')
                    .set('X-Key', `key1`)
                    .send({msg:"mensaje 3", tags:[1,2]})
                    .end((err, res) =>{
                        res.should.have.status(200);
                        res.header["x-signature"].should.be.a("string");
                        res.header["x-key"].should.be.a("string");
                        res.header["x-route"].should.be.a("string");
                        done();
                    });
            });
        });

        describe("Get message by ID", function(){
            let url = null;
            before(function(done){
                url = `${config.GlobalConfig.PROTOCOL}://${config.GlobalConfig.SITENAME}:${config.GlobalConfig.PORT}`;
                done();
            });

            it('Id message incorrect', function (done)  {
                chai.request(url)
                    .get('/messages/dsa')
                    .set('X-Key', `key1`)
                    .end((err, res) =>{
                        res.should.have.status(422);
                        done();
                    });
            });
            
            it('get message 1', function (done)  {
                chai.request(url)
                    .get('/messages/1')
                    .set('X-Key', `key1`)
                    .end((err, res) =>{
                        res.should.have.status(200);
                        res.header["x-signature"].should.be.a("string");
                        res.header["x-key"].should.be.a("string");
                        res.header["x-route"].should.be.a("string");
                        done();
                    });
            });

            it('Messager do not register', function (done)  {
                chai.request(url)
                    .get('/messages/4')
                    .set('X-Key', `key1`)
                    .end((err, res) =>{
                        res.should.have.status(404);
                        done();
                    });
            });
        });

        describe("Get message by Tag", function(){
            let url = null;
            before(function(done){
                url = `${config.GlobalConfig.PROTOCOL}://${config.GlobalConfig.SITENAME}:${config.GlobalConfig.PORT}`;
                done();
            });

            it("Get by tag 1", function(done){
                chai.request(url)
                    .get('/messages/tag/1')
                    .set('X-Key', `key1`)
                    .end((err, res) =>{
                        res.should.have.status(200);
                        res.header["x-signature"].should.be.a("string");
                        res.header["x-key"].should.be.a("string");
                        res.header["x-route"].should.be.a("string");
                        done();
                    });
            });

            it("Get by tag 2", function(done){
                chai.request(url)
                    .get('/messages/tag/2')
                    .set('X-Key', `key1`)
                    .end((err, res) =>{
                        res.should.have.status(200);
                        res.header["x-signature"].should.be.a("string");
                        res.header["x-key"].should.be.a("string");
                        res.header["x-route"].should.be.a("string");
                        done();
                    });
            });

            it("messages empty because tag does not exist", function(done){
                chai.request(url)
                    .get('/messages/tag/3')
                    .set('X-Key', `key1`)
                    .end((err, res) =>{
                        res.should.have.status(200);
                        res.header["x-signature"].should.be.a("string");
                        res.header["x-key"].should.be.a("string");
                        res.header["x-route"].should.be.a("string");
                        done();
                    });
            });
        })
    }
}