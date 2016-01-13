angular.module('app.controllers').controller('BookDetailsCtrl', function($scope, $routeParams, cachedBooks, identity) {
    $scope.identity = identity;
});