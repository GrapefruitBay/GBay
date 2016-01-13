angular.module('app.controllers').controller('LoginCtrl', function($scope, $location, notifier, identity, auth) {
    $scope.identity = identity;

    $scope.login = function(user) {
        auth.login(user).then(function(success) {
            if (success) {
                notifier.info('Successful login!');
            }
            else {
                notifier.warning('Username/Password combination is not valid!');
            }
        });
    }

    $scope.logout = function() {
        auth.logout().then(function() {
            notifier.info('Successful logout!');
            if ($scope.user) {
                $scope.user.username = '';
                $scope.user.password = '';
            }
            $location.path('/');
        })
    }
})