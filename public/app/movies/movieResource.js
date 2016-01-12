app.factory('MovieResource', function($resource) {
    var MovieResource = $resource('/api/movies/:id', {id:'@id'}, { update: {method: 'PUT', isArray: false}});

    return MovieResource;
})