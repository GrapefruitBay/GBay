angular.module('app.services').factory('cachedBooks', function(BookResource, identity) {
    var cachedBooks;
    return {
        query: function() {
            if (!cachedBooks || identity.currentUser.isAdmin()) {
                cachedBooks = BookResource.query();
            }

            return cachedBooks;
        }
    }
});