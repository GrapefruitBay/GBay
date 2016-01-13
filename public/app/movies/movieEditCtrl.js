angular.module('app.controllers').controller('MovieEditCtrl', function($scope, $location, $routeParams, MovieEdit, cachedMovies, notifier) {
    $scope.movie = cachedMovies.query().$promise.then(function(collection) {
        collection.forEach(function(movie) {
            if (movie._id === $routeParams.id) {
                $scope.movie = movie;
                $scope.movie.stars = movie.actors.join(',');
                $scope.movie.genres = movie.genres.join(' ');
                $scope.movie.tags = movie.tags.join(' ');
            }
        })
    })

    $scope.editMovie = function(movie) {
        $scope.movie.stars = movie.actors.join(',');
        movie.genres = movie.genres.split(' ');
        movie.tags = movie.tags.split(' ');
        MovieEdit.edit(movie).then(function() {
            notifier.info('Movie edited successfully!');
            $location.path('/movies/' + movie._id);
        })
    },
    $scope.deleteMovie = function(movieId) {
        MovieEdit.deleteMovie(movieId).then(function() {
            notifier.info('Movie deleted successfully!');
            $location.path('/movies');
        })
    }
});