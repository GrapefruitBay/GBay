app.controller('MoviesListCtrl', function($scope, cachedMovies, identity) {
    $scope.identity = identity;
    $scope.movies = cachedMovies.query();
});