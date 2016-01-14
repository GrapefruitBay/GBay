var should = require('should');
var request = require('supertest');
var app = require('../server').server;
app = request(app);

describe('Test for server behavior', function () {
    describe('GET /games', function () {
        it('should respond with status 200', function (done) {

            setTimeout(function () {
                app.get('/games')
                    .expect(200);
                done();
            }, 1000);
        });
    });
    describe('POST /games', function () {
        it('should respond with status 404', function (done) {
            app.post('/games')
                .send('invalid')
                .expect(404)
                .end(done);
        });
        it('should respond with status 404', function (done) {
            app.post('/games')
                .send('invalid')
                .expect(404)
                .end(function(req,res){
                    res.header['location'].should.not.include("/games")
                }, done);
        });
    });

    //describe('/games', function () {
    //    it('GET
    // should respond with status 200', function (done) {
    //        app.get('/games')
    //            .expect(200, done);
    //        return;
    //        //app.get('/games')
    //        //    .end(function (err, res) {
    //        //        res.expect(404);
    //        //    });
    //        //done();
    //    });
    //    it('GET should respond with content type JSON', function (done) {
    //        app.get('/games')
    //            .expect(function (res) {
    //                res["content-tyo=pe"] == 'text/html';
    //            }, done);
    //        return;
    //
    //    });
    //    it('POST should respond with status 404', function (done) {
    //        app.post('/games')
    //            .end(function (err, res) {
    //                res.expect(404);
    //
    //            }, done);
    //    });
    //    it('PUT should respond with status 404', function (done) {
    //        app.put('/games')
    //            .end(function (err, res) {
    //                res.expect(305);
    //            }, done);
    //    });
    //});
});