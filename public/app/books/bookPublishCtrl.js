angular.module('app.controllers').controller('BookPublishCtrl', function($scope, $location, BookEdit, notifier) {
    // May be unneeded?
    $scope.publish = function(book) {
        book.type = 'book';
        book.genres = book.genres.split(',');
        book.tags = book.tags.split(',');
        BookEdit.publish(book).then(function() {
            notifier.info('Book published successfully!');
            $location.path('/books');
        })
    }
});