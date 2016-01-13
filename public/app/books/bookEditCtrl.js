angular.module('app.controllers').controller('BookEditCtrl', function($scope, $location, $routeParams, BookEdit, cachedBooks, notifier) {
    $scope.editBook = function(book) {

        book.genres = book.genres.split(' ');
        book.tags = book.tags.split(' ');
        BookEdit.edit(book).then(function() {
            notifier.info('Book edited successfully!');
            $location.path('/books/' + book._id);
        })
    },
    $scope.deleteBook = function(bookId) {
        BookEdit.deleteBook(bookId).then(function() {
            notifier.info('Book deleted successfully!');
            $location.path('/books');
        })
    }
});