angular.module('app.controllers').controller('GamesListCtrl', function($scope, cachedGames) {
    $scope.games = cachedGames.query();
});