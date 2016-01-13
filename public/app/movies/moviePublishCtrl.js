angular.module('app.controllers').controller('MoviePublishCtrl', function($scope, $location, MovieEdit, notifier) {
    $scope.publish = function(movie) {

        movie.type = 'movie';
        movie.genres = movie.genres.split(' ');
        movie.tags = movie.tags.split(' ');
        MovieEdit.publish(movie).then(function() {
            notifier.success('Movie added successfully!');
            $location.path('/movies');
        })
    }
});