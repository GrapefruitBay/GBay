app.controller('MovieDetailsCtrl', function($scope, $routeParams, cachedMovies, identity) {
    $scope.identity = identity;
    $scope.movie = cachedMovies.query().$promise.then(function(collection) {
        collection.forEach(function(movie) {
            if (movie._id === $routeParams.id) {
                $scope.movie = movie;
            }
        })
    })
});