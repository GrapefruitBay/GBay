var auth = require('./auth'),
    controllers = require('../controllers');

module.exports = function(app) {
    app.get('/api/users', auth.isInRole('admin'), controllers.users.getAllUsers);
    app.post('/api/users', controllers.users.createUser);
    app.put('/api/users', auth.isAuthenticated, controllers.users.updateUser);

    app.get('/api/books', controllers.books.getAllBooks);
    app.post('/api/books', controllers.books.createBook);
    app.get('/api/books/:id', controllers.books.getBookById);
    app.put('/api/books/', controllers.books.updateBook);
    //app.delete('/api/books/:id', controllers.books.removeBook);

    app.get('/api/games', controllers.games.getAllGames);
    app.get('/api/games/:id', controllers.games.getGameById);

    app.get('/api/movies', controllers.movies.getAllMovies);
    app.post('/api/movies', controllers.movies.createMovie);
    app.get('/api/movies/:id', controllers.movies.getMovieById);
    app.put('/api/movies/', controllers.movies.updateMovie);
    //app.delete('/api/movies/:id', controllers.movies.removeMovie);

    app.get('/partials/:partialArea/:partialName', function(req, res) {
        res.render('../../public/app/' + req.params.partialArea + '/' + req.params.partialName)
    });

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