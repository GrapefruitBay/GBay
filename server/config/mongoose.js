var mongoose = require('mongoose'),
    user = require('../models/User'),
    book = require('../models/Book'),
    game = require('../models/Game'),
    movie = require('../models/Movie'),
    stationery = require('../models/Stationery');

module.exports = function(config) {
    mongoose.connect(config.db);
    var db = mongoose.connection;

    db.once('open', function(err) {
        if (err) {
            console.log('Database could not be opened: ' + err);
            return;
        }

        console.log('Database up and running...')
    });

    db.on('error', function(err){
        console.log('Database error: ' + err);
    });

    user.seedInitialUsers();
    book.seedInitialBooks();
    game.seedInitialGames();
    movie.seedInitialMovies();
    stationery.seedInitialStationeries();

};