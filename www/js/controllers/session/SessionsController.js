app.controller( 'SessionsCtrl', function ( $scope, $stateParams, SessionByEventService ) {
    $scope.sessions = SessionByEventService.query( {
          eventId: $stateParams.eventId
    } );
} );
