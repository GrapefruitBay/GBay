var should = require('should');

var app = require('../server').server;
var request = require('supertest');
//
describe('GET /', function() {
    it('should render the index page', function(done) {
        request(app)
            .get('/')
            .end(function(e, res) {
                console.log(e, res);
            })
    })
});

//describe('Test for server behavior', function () {
//    describe('/games', function () {
//        it('GET should respond with status 200', function(done){
//            console.log(done);
//            app.get('/games', function(req, res){
//                console.log(req);
//                console.log(res);
//
//                res.expect.status(404);
//                return;
//            });
//            done();
//        });
//        it('GET should respond with content type JSON', function(done){
//            app.get('/games', function(req, res){
//                res.expect('Content-Type', /json/)
//            });
//            done();
//        });
//        it('GET should respond with array', function(done){
//            app.get('/games', function(req, res){
//                res.expect(function(res) {
//                    Object.prototype.toString.call(res.body) === '[object Array]';
//                })
//            });
//            done();
//        });
//        it('GET should respond with non-empty array', function(done){
//            app.get('/games', function(req, res){
//                res.expect(function(res) {
//                    res.body.length > 0;
//                })
//            });
//            done();
//        });
//    });
//
//});