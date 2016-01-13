app.controller('MainCtrl', function($scope, cachedBooks, cachedGames, cachedMovies) {

    //$scope.currentPageBooks = 1;
    //$scope.currentPageGames = 1;
    //$scope.currentPageMovies = 1;
    //$scope.currentPageStationary = 1;

    $scope.books = cachedBooks.query();
    $scope.games = cachedGames.query();
    $scope.movies = cachedMovies.query();

    //vm.search = function (request, page) {
    //    request = request || {};
    //    request.page = page;
    //
    //    vm.currentPage = page;
    //};
    //
    //function paging(arr, page, size) {
    //    return arr.slice((page - 1) * size, (page - 1) * size + size);
    //}
});