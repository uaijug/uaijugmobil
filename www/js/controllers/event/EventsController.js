app.controller( 'EventsCtrl', function ( $scope, EventService ) {
    $scope.events = EventService.query();
} );
