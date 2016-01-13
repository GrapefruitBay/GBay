angular.module('app.controllers').controller('BookPublishCtrl', function($scope, $location, BookEdit, notifier) {
    $scope.publish = function(book) {

        book.type = 'book';
        book.genres = book.genres.split(' ');
        book.tags = book.tags.split(' ');
        BookEdit.publish(book).then(function() {
            notifier.success('Book published successfully!');
            $location.path('/books');
        })
    }
});