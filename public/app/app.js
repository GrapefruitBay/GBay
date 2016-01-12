var app = angular.module('app', ['ngResource', 'ngRoute']).value('toastr', toastr);

app.config(function($routeProvider, $locationProvider) {
    // $locationProvider.html5Mode(true);

    var routeUserChecks = {
        adminRole: {
            authenticate: function(auth) {
                return auth.isAuthorizedForRole('admin');
            }
        },
        isBanned: {
            authenticate: function(auth) {
                return auth.isAuthorizedForRole('banned');
            }
        },
        authenticated: {
            authenticate: function(auth) {
                return auth.isAuthenticated();
            }
        }
    };

    $routeProvider
        .when('/', {
            templateUrl: '/partials/main/home',
            controller: 'MainCtrl'
        })
        .when('/books', {
            templateUrl: '/partials/books/books-list',
            controller: 'BooksListCtrl'
        })
        .when('/books/edit/', {
            templateUrl: '/partials/books/book-publish',
            controller: 'BookPublishCtrl'
        })
        .when('/books/edit/:id', {
            templateUrl: '/partials/books/book-edit',
            controller: 'BookEditCtrl'
        })
        .when('/books/:id', {
            templateUrl: '/partials/books/book-details',
            controller: 'BookDetailsCtrl'
        })
        .when('/books/:id/review', {
            templateUrl: '/partials/books/book-review',
            controller: 'BookReviewCtrl'
        })
        .when('/movies', {
            templateUrl: '/partials/movies/movies-list',
            controller: 'MoviesListCtrl'
        })
        .when('/movies/edit/', {
            templateUrl: '/partials/movies/movie-publish',
            controller: 'MoviePublishCtrl'
        })
        .when('/movies/edit/:id', {
            templateUrl: '/partials/movies/movie-edit',
            controller: 'MovieEditCtrl'
        })
        .when('/movies/:id', {
            templateUrl: '/partials/movies/movie-details',
            controller: 'MovieDetailsCtrl'
        })
        .when('/movies/:id/review', {
            templateUrl: '/partials/movies/movie-review',
            controller: 'MovieReviewCtrl'
        })
        .when('/games', {
            templateUrl: '/partials/games/games-list',
            controller: 'GamesListCtrl'
        })
        .when('/games/:id', {
            templateUrl: '/partials/games/game-details',
            controller: 'GameDetailsCtrl'
        })
        .when('/signup', {
            templateUrl: '/partials/account/signup',
            controller: 'SignUpCtrl'
        })
        .when('/profile', {
            templateUrl: '/partials/account/profile',
            controller: 'ProfileCtrl',
            resolve: routeUserChecks.authenticated
        })
        .when('/admin/users', {
            templateUrl: '/partials/admin/users-list',
            controller: 'UserListCtrl',
            resolve: routeUserChecks.adminRole
        })
});

app.run(function($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(ev, current, previous, rejection) {
        if (rejection === 'not authorized') {
            $location.path('/');
        }
    })
});