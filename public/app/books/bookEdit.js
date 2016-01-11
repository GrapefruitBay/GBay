app.factory('BookEdit', function($http, $q, BookResource) {
    return {
        publish: function(book) {
            var deferred = $q.defer();

            var book = new BookResource(book);
            book.$save().then(function() {
                deferred.resolve();
            }, function(response) {
                deferred.reject(response);
            });

            return deferred.promise;
        },
        edit: function(book) {
            var deferred = $q.defer();

            var updatedBook = new BookResource(book);
            updatedBook._id = book._id;
            updatedBook.$update().then(function() {
                deferred.resolve();
            }, function(response) {
                deferred.reject(response);
            });

            return deferred.promise;
        },
        deleteBook: function(bookId) {
            if (confirm("Item will be permanently removed \nAre you sure?") == true) {
                var deferred = $q.defer();

                $http.delete('/api/books/' + bookId).success(function(response) {
                    if (response.success) {
                        deferred.resolve(true);
                    }
                    else {
                        deferred.resolve(false);
                    }
                });

                return deferred.promise;
            } else {
                return;
            }
        }
    }
})