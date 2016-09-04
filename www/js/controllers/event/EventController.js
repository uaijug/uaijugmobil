app.controller( 'EventCtrl', function ( $scope, $stateParams, EventService, SessionByEventService ) {
    $scope.event = EventService.get( {
        eventId: $stateParams.eventId
    } );

    $scope.sessions = SessionByEventService.query( {
            eventId: $stateParams.eventId
    } );
} );
