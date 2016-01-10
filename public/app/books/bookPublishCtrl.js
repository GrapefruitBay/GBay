app.controller('BookPublishCtrl', function($scope, $location, BookEdit, notifier) {
    $scope.publishBook = function(book) {
        BookEdit.publish(book).then(function() {
            notifier.success('Book published successfully!');
            $location.path('/books/' + book._id);
        })
    }
});