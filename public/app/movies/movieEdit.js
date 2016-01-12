app.factory('MovieEdit', function($http, $q, MovieResource) {
    return {
        publish: function(movie) {
            var deferred = $q.defer();

            var movie = new MovieResource(movie);
            movie.$save().then(function() {
                deferred.resolve();
            }, function(response) {
                deferred.reject(response);
            });

            return deferred.promise;
        },
        edit: function(movie) {
            var deferred = $q.defer();

            var updatedMovie = new MovieResource(movie);
            updatedMovie._id = movie._id;
            updatedMovie.$update().then(function() {
                deferred.resolve();
            }, function(response) {
                deferred.reject(response);
            });

            return deferred.promise;
        },
        deleteBook: function(movieId) {
            if (confirm("Item will be permanently removed \nAre you sure?") == true) {
                var deferred = $q.defer();

                $http.delete('/api/movies/' + movieId).success(function(response) {
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