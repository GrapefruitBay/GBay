angular.module('app.controllers').controller('BooksListCtrl', function($scope, cachedBooks, identity) {
    $scope.identity = identity;
});