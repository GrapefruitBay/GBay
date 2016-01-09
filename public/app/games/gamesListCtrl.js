app.controller('GamesListCtrl', function($scope, cachedGames) {
    $scope.games = cachedGames.query();
});