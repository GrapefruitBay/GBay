app.controller('MainCtrl', function($scope, cachedBooks, cachedGames, cachedMovies) {
    $scope.books = cachedBooks.query();
    $scope.games = cachedGames.query();
    $scope.movies = cachedMovies.query();
});