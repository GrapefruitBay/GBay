var auth = require('./auth'),
    controllers = require('../controllers');

module.exports = function(app) {
    app.get('/', controllers.home.getAllProducts);

    app.get('/api/users', auth.isInRole('admin'), controllers.users.getAllUsers);
    app.post('/api/users', controllers.users.createUser);
    app.put('/api/users', auth.isAuthenticated, controllers.users.updateUser);

    app.get('/books', controllers.books.getAllBooks);
    app.post('/books', controllers.books.createBook);
    app.get('/books/edit', auth.isAuthenticated, controllers.books.getCreateBook);
    app.get('/books/:id', controllers.books.getBookById);
    app.post('/books/edit/:id', auth.isAuthenticated, controllers.books.updateBook);
    app.delete('/books/:id', controllers.books.removeBook);
    //app.put('/books/:id', controllers.books.addComment);
    app.put('/books/review/:id', auth.isAuthenticated,controllers.books.addComment);
    app.get('/books/edit/:id', auth.isAuthenticated, controllers.books.getEditBook);

    app.get('/games', controllers.games.getAllGames);
    app.get('/games/:id', controllers.games.getGameById);
    app.post('/games', controllers.games.createGame);

    app.get('/movies', controllers.movies.getAllMovies);
    app.post('/movies', controllers.movies.createMovie);
    app.get('/movies/:id', controllers.movies.getMovieById);
    app.put('/movies/', controllers.movies.updateMovie);
    app.delete('/movies/:id', controllers.movies.removeMovie);
    app.put('/movies/:id', controllers.movies.addComment);
    app.put('/movies/review/:id', controllers.movies.addComment);

    app.get('/stationeries', controllers.stationeries.getAllStationeries);
    app.post('/stationeries', controllers.stationeries.createStationery);
    app.get('/stationeries/:id', controllers.stationeries.getStationeryById);
    app.put('/stationeries/', controllers.stationeries.updateStationery);
    app.delete('/stationeries/:id', controllers.stationeries.removeStationery);
    app.put('/stationeries/:id', controllers.stationeries.addComment);
    app.put('/stationeries/review/:id', controllers.stationeries.addComment);

    app.post('/login', auth.login);
    app.post('/logout', auth.logout);

    app.get('/signup', function (req, res) {
        res.render('account/signup');
    });
    app.post('/signup', controllers.users.createUser);

    app.get('/api/*', function(req, res) {
        res.status(404);
        res.end();
    });

    app.get('*', function(req, res) {
        res.render('index', {currentUser: req.user});
    });
};