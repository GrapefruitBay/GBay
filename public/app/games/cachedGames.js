angular.module('app.services').factory('cachedGames', function(GameResource) {
    var cachedGames;

    return {
        query: function() {
            if (!cachedGames) {
                cachedGames = GameResource.query();
            }

            return cachedGames;
        }
    }
});