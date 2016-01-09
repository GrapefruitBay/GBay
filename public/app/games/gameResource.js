app.factory('GameResource', function($resource) {
    var GameResource = $resource('/api/games/:id', {id:'@id'}, { update: {method: 'PUT', isArray: false}});

    return GameResource;
})