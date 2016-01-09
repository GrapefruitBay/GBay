"use strict";

let express = require('express');

var env = process.env.NODE_ENV || 'development';
var config = require('./server/config/config')[env];

let app = express();

require('./server/config/express')(app, config);
require('./server/config/mongoose')(config);
require('./server/config/passport')();
require('./server/config/routes')(app);

//app.get('/books', function (req, res) {
//    res.render('books');
//});
//
//app.get('/courses', function (req, res) {
//    res.render('featured-courses');
//});

app.listen(config.port, function () {
    console.log('Server running on http://localhost:' + config.port);
});