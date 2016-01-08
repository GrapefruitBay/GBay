app.controller('BookDetailsCtrl', function($scope, $routeParams, cachedCourses) {
    //$scope.course = CourseResource.get({id: $routeParams.id});
    $scope.book = cachedCourses.query().$promise.then(function(collection) {
        collection.forEach(function(book) {
            if (book._id === $routeParams.id) {
                $scope.book = book;
            }
        })
    })
});