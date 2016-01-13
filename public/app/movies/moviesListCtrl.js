angular.module('app.controllers').controller('MoviesListCtrl', function($scope, cachedMovies, identity) {
    $scope.identity = identity;
});