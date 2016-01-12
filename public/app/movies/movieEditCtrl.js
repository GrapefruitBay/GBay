app.controller('MovieEditCtrl', function($scope, $location, $routeParams, MovieEdit, cachedMovies, notifier) {
    $scope.movie = cachedMovies.query().$promise.then(function(collection) {
        collection.forEach(function(movie) {
            if (movie._id === $routeParams.id) {
                $scope.movie = movie;
                $scope.movie.genres = movie.genres.join(' ');
                $scope.movie.tags = movie.tags.join(' ');
            }
        })
    })

    $scope.editMovie = function(movie) {

        movie.genres = movie.genres.split(' ');
        movie.tags = movie.tags.split(' ');
        MovieEdit.edit(movie).then(function() {
            notifier.success('Movie edited successfully!');
            $location.path('/movies/' + movie._id);
        })
    },
    $scope.deleteMovie = function(movieId) {
        MovieEdit.deleteMovie(movieId).then(function() {
            notifier.success('Movie deleted successfully!');
            $location.path('/movies');
        })
    }
});