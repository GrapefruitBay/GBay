app.controller('BookEditCtrl', function($scope, $location, $routeParams, BookEdit, cachedBooks, notifier) {
    $scope.book = cachedBooks.query().$promise.then(function(collection) {
        collection.forEach(function(book) {
            if (book._id === $routeParams.id) {
                $scope.book = book;
            }
        })
    })

    $scope.editBook = function(book) {

        book.genres = book.genres.split(' ');
        book.tags = book.tags.split(' ');
        BookEdit.edit(book).then(function() {
            notifier.success('Book edited successfully!');
            $location.path('/books/' + book._id);
        })
    },
    $scope.deleteBook = function(book) {
        BookEdit.delete(book).then(function() {
            notifier.success('Book deleted successfully!');
            $location.path('/books');
        })
    }
});