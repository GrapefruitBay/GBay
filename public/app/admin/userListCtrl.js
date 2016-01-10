app.controller('UserListCtrl', function($scope, identity, UsersResource) {
    $scope.identity = identity;
    console.log(identity)
    $scope.users = UsersResource.query();
});