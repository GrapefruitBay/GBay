angular.module('app.controllers').controller('MovieDetailsCtrl', function($scope, $routeParams, cachedMovies, identity) {
    $scope.identity = identity;
});