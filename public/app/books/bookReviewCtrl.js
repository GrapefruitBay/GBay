app.controller('BookReviewCtrl', function($scope, $location, $routeParams, BookEdit, cachedBooks, identity, notifier) {
    $scope.identity = identity;
    $scope.book = cachedBooks.query().$promise.then(function(collection) {
        collection.forEach(function(book) {
            if (book._id === $routeParams.id) {
                $scope.book = book;
            }
        })
    })

    $scope.rating = 0;

    $scope.disableRating = function(){
        return $scope.rating > 0;
    }

    $scope.setRating = function(rating) {
        $scope.rating = rating;
    }

    $scope.addReview = function(book) {
        var bookReview = {
            _id: book._id,
            review: {
                author: $scope.identity.currentUser.username,
                content: book.comment,
                rating: $scope.rating
            }
        }
        BookEdit.addReview(bookReview).then(function() {
            notifier.success('Book review created successfully!');
            $location.path('/books/' + book._id);
        })
    }
});