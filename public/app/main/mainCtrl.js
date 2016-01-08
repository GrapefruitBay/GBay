app.controller('MainCtrl', function($scope, cachedBooks) {
    $scope.books = cachedBooks.query();
});