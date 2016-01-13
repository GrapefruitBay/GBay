angular.module('app.controllers').controller('GameDetailsCtrl', function($scope, $routeParams, cachedGames) {
    //$scope.course = CourseResource.get({id: $routeParams.id});
    $scope.game = cachedGames.query().$promise.then(function(collection) {
        collection.forEach(function(game) {
            if (game._id === $routeParams.id) {
                $scope.game = game;
            }
        })
    })
});