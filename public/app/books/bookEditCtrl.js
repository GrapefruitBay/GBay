angular.module('app.controllers').controller('BookEditCtrl', function($scope, $location, $routeParams, BookEdit, cachedBooks, notifier) {
    $scope.book = cachedBooks.query().$promise.then(function(collection) {
        collection.forEach(function(book) {
            if (book._id === $routeParams.id) {
                $scope.book = book;
                $scope.book.genres = book.genres.join(' ');
                $scope.book.tags = book.tags.join(' ');
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
    $scope.deleteBook = function(bookId) {
        BookEdit.deleteBook(bookId).then(function() {
            notifier.success('Book deleted successfully!');
            $location.path('/books');
        })
    }
});