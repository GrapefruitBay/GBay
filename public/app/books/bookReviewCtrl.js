angular.module('app.controllers').controller('BookReviewCtrl', function($scope, $location, $routeParams, BookEdit, cachedBooks, identity, notifier) {
    $scope.identity = identity;

    $scope.rating = 0;

    $scope.disableRating = function(){
        return $scope.rating > 0;
    };

    $scope.setRating = function(rating) {
        $scope.rating = rating;
    };
    // Unneeded?
    $scope.addReview = function(book) {
        var bookReview = {
            _id: book._id,
            review: {
                author: $scope.identity.currentUser.username,
                content: book.comment,
                rating: $scope.rating
            }
        };
        BookEdit.addReview(bookReview).then(function() {
            notifier.success('Book review created successfully!');
            $location.path('/books/' + book._id);
        })
    }
});