var auth = require('./auth'),
    controllers = require('../controllers');

module.exports = function(app) {
    app.get('/', function (req, res) {
       res.render('home/home', {currentUser: req.user});
    });

    app.get('/api/users', auth.isInRole('admin'), controllers.users.getAllUsers);
    app.post('/api/users', controllers.users.createUser);
    app.put('/api/users', auth.isAuthenticated, controllers.users.updateUser);

    app.get('/books', controllers.books.getAllBooks);
    app.post('/books', controllers.books.createBook);
    app.get('/books/:id', controllers.books.getBookById);
    app.put('/books/', controllers.books.updateBook);
    app.delete('/books/:id', controllers.books.removeBook);
    app.put('/books/:id', controllers.books.addComment);
    app.put('/books/review/:id', controllers.books.addComment);

    app.get('/games', controllers.games.getAllGames);
    app.get('/games/:id', controllers.games.getGameById);
    app.post('/games', controllers.games.createGame);

    app.get('/movies', controllers.movies.getAllMovies);
    app.post('/movies', controllers.movies.createMovie);
    app.get('/movies/:id', controllers.movies.getMovieById);
    app.put('/movies/', controllers.movies.updateMovie);
    app.delete('/movies/:id', controllers.movies.removeMovie);

    app.post('/login', auth.login);
    app.post('/logout', auth.logout);

    app.get('/api/*', function(req, res) {
        res.status(404);
        res.end();
    });

    app.get('*', function(req, res) {
        res.render('index', {currentUser: req.user});
    });
};