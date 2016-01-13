var Game = require('mongoose').model('Game'),
    Book = require('mongoose').model('Book'),
    Movie = require('mongoose').model('Movie');

module.exports = {
    getAllProducts: function (req, res, next) {
        console.log('VLEZE');
        var games = [],
            movies = [],
            books = [];

        Game.find({}).exec(function (err, collection) {
            if (err) {
                console.log('Games could not be loaded: ' + err);
            }

            games = collection;
        });

        Movie.find({}).exec(function (err, collection) {
            if (err) {
                console.log('Movies could not be loaded: ' + err);
            }

            movies = collection;
        });

        Book.find({}).exec(function (err, collection) {
            if (err) {
                console.log('Books could not be loaded: ' + err);
            }

            books = collection;
        });

        res.render('home/home', {games: games, books: books, movies: movies, currentUser: req.user});
    }
};
