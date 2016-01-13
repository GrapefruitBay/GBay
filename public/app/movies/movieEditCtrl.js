angular.module('app.controllers').controller('MovieEditCtrl', function($scope, $location, $routeParams, MovieEdit, cachedMovies, notifier) {
    $scope.editMovie = function(movie) {
        $scope.movie.stars = movie.actors.join(',');
        movie.genres = movie.genres.split(' ');
        movie.tags = movie.tags.split(' ');
        MovieEdit.edit(movie).then(function () {
            notifier.info('Movie edited successfully!');
            $location.path('/movies/' + movie._id);
        })
    };

    $scope.deleteMovie = function(movieId) {
        MovieEdit.deleteMovie(movieId).then(function() {
            notifier.info('Movie deleted successfully!');
            $location.path('/movies');
        })
    };
});