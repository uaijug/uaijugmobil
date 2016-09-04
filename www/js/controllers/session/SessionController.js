app.controller( 'SessionCtrl', function ( $scope, $stateParams, SessionService ) {
    $scope.session = SessionService.get( {
        sessionId: $stateParams.sessionId
    } );
} );
