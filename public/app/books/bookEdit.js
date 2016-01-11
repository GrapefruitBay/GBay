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
            console.log(book)

            var updatedBook = new BookResource(book);
            updatedBook._id = book._id;
            updatedBook.$update().then(function() {
                deferred.resolve();
            }, function(response) {
                deferred.reject(response);
            });

            return deferred.promise;
        },
        delete: function(book) {
            return
        }
    }
})