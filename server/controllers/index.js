var usersController = require('./usersController');
var booksController = require('./booksController');
var gamesController = require('./gamesController');
var moviesController = require('./moviesController');

module.exports = {
    users: usersController,
    books: booksController,
    games: gamesController,
    movies: moviesController
};