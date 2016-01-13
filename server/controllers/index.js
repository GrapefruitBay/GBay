var usersController = require('./usersController');
var booksController = require('./booksController');
var gamesController = require('./gamesController');
var moviesController = require('./moviesController');
var homeController = require('./homeController');

module.exports = {
    users: usersController,
    books: booksController,
    games: gamesController,
    movies: moviesController,
    home: homeController
};