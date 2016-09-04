app.controller( 'DashboardCtrl', function ( $scope, NewsService ) {
    $scope.newsList = NewsService.query();
} );
