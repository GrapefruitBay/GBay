app.controller('BookDetailsCtrl', function($scope, $routeParams, cachedBooks, identity) {
    $scope.identity = identity;
    $scope.book = cachedBooks.query().$promise.then(function(collection) {
        collection.forEach(function(book) {
            if (book._id === $routeParams.id) {
                $scope.book = book;
            }
        })
    })
});