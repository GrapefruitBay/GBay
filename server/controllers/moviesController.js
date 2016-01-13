var Movie = require('mongoose').model('Movie');

module.exports = {
    getAllMovies: function (req, res, next) {
        Movie.find({}).exec(function (err, movies) {
            if (err) {
                console.log('Movies could not be loaded: ' + err);
            }

            res.render('movies/movies-list', {movies: movies});
        })
    },
    getMovieById: function (req, res, next) {
        Movie.findOne({_id: req.params.id}).exec(function (err, movie) {
            if (err) {
                console.log('Movies could not be loaded: ' + err);
            }

            res.render('movies/movie-details', {movie: movie});
        })
    },
    createMovie: function (req, res, next) {
        var newMovieData = req.body;
        Movie.create(newMovieData, function (err, movie) {
            if (err) {
                console.log('Failed to create new movie: ' + err);
                return;
            }

            res.render('movies/movie-publish', {movie: movie});
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
    },
    addComment: function (req, res, next) {
        if (req.user) {
            var review = req.body.review;
            Book.findOneAndUpdate({_id: req.body._id}, {$push: {reviews: review}}, {
                safe: true,
                upsert: true
            }, function () {
                res.render('movies/movie-review');
            })
        }
        else {
            res.send({reason: 'You do not have permissions!'})
        }
    },
    removeMovie: function(req, res, next) {
        if (req.user.roles.indexOf('admin') > -1) {

            Movie.remove(({_id: req.params.id}), function() {
                res.end();
            })
        }
        else {
            res.send({reason: 'You do not have permissions!'})
        }
    }
};
