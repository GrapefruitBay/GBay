var Movie = require('mongoose').model('Movie');

module.exports = {
    getAllMovies: function (req, res, next) {
        Movie.find({}).exec(function (err, collection) {
            if (err) {
                console.log('Movies could not be loaded: ' + err);
            }

            //res.render('moviesList', {movies: movies});
            res.send(collection);
        })
    },
    getMovieById: function (req, res, next) {
        Movie.findOne({_id: req.params.id}).exec(function (err, movie) {
            if (err) {
                console.log('Movies could not be loaded: ' + err);
            }

            //res.render('movieDetails', {movie: movie});
            res.send(movie);
        })
    },
    createMovie: function (req, res, next) {
        var newMovieData = req.body;
        Movie.create(newMovieData, function (err, movie) {
            if (err) {
                console.log('Failed to create new movie: ' + err);
                return;
            }

            //res.render('addMovies', {movie: movies});
            res.send(movie);
        })
    },
    updateMovie: function (req, res, next) {
        if (req.user.roles.indexOf('admin') > -1) {
            var updatedMovieData = req.body;

            Movie.update({_id: req.body._id}, updatedMovieData, function () {
                res.end();
            })
        }
        else {
            res.send({reason: 'You do not have permissions!'})
        }
    }
};
