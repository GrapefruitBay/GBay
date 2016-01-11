app.controller('BooksListCtrl', function($scope, cachedBooks, identity) {
    $scope.identity = identity;
    $scope.books = cachedBooks.query();
});