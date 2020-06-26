let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

const config = require('../../../src/config');

chai.use(chaiHttp);

module.exports = {
    createTagCase: function(){
        describe('entity tag invalids', function (){
            let url = null;
            before(function(done){
                url = `${config.GlobalConfig.PROTOCOL}://${config.GlobalConfig.SITENAME}:${config.GlobalConfig.PORT}`;
                done();
            });

            it('invalid name', function (done)  {
                chai.request(url)
                    .post('/tag')
                    .send({names:"tag1"})
                    .end((err, res) =>{
                        res.should.have.status(422);
                        done();
                    });
            });

            it('name empty', function (done)  {
                chai.request(url)
                    .post('/tag')
                    .send({name:""})
                    .end((err, res) =>{
                        res.should.have.status(422);
                        done();
                    });
            });
        });

        describe('Cases for create multiples tags', function (){
            let url = null;
            before(function(done){
                url = `${config.GlobalConfig.PROTOCOL}://${config.GlobalConfig.SITENAME}:${config.GlobalConfig.PORT}`;
                done();
            });

            it('tag1', function (done)  {
                chai.request(url)
                    .post('/tag')
                    .send({name:"tag1"})
                    .end((err, res) =>{
                        res.should.have.status(201);
                        done();
                    });
            });


            it('tag2', function (done)  {
                chai.request(url)
                    .post('/tag')
                    .send({name:"tag2"})
                    .end((err, res) =>{
                        res.should.have.status(201);
                        done();
                    });
            });

            it('tag3', function (done)  {
                chai.request(url)
                    .post('/tag')
                    .send({name:"tag3"})
                    .end((err, res) =>{
                        res.should.have.status(201);
                        done();
                    });
            });
        });

        describe('endpoint index tag', function (){
            let url = null;
            before(function(done){
                url = `${config.GlobalConfig.PROTOCOL}://${config.GlobalConfig.SITENAME}:${config.GlobalConfig.PORT}`;
                done();
            });

            it('get  all tags', function (done)  {
                chai.request(url)
                    .get('/tag')
                    .end((err, res) =>{
                        res.body.length.should.equal(3);
                        res.should.have.status(201);
                        done();
                    });
            });
        });
    }
}