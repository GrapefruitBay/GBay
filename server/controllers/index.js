var usersController = require('./usersController');
var booksController = require('./booksController');
var gamesController = require('./gamesController');

module.exports = {
    users: usersController,
    books: booksController,
    games: gamesController
};