app.factory('cachedMovies', function(MovieResource, identity) {
    var cachedMovies;
    return {
        query: function() {
            if (!cachedMovies || identity.currentUser.isAdmin()) {
                cachedMovies = MovieResource.query();
            }

            return cachedMovies;
        }
    }
});