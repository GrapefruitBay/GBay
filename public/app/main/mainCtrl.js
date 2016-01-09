app.controller('MainCtrl', function($scope, cachedBooks, cachedGames) {
    $scope.books = cachedBooks.query();
    $scope.games = cachedGames.query();
});