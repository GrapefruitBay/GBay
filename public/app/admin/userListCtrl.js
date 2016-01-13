angular.module('app.controllers').controller('UserListCtrl', function($scope, identity, UsersResource) {
    $scope.identity = identity;
    $scope.users = UsersResource.query();
});