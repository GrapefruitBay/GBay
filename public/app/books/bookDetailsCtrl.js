app.controller('BookDetailsCtrl', function($scope, $routeParams, cachedBooks) {
    //$scope.course = CourseResource.get({id: $routeParams.id});
    $scope.book = cachedBooks.query().$promise.then(function(collection) {
        collection.forEach(function(book) {
            if (book._id === $routeParams.id) {
                $scope.book = book;
            }
        })
    })
});