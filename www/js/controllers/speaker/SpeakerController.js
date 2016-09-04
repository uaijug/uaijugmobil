app.controller( 'SpeakerCtrl', function ( $scope, $stateParams, SpeakerService ) {
    $scope.speaker = SpeakerService.get( {
        speakerId: $stateParams.speakerId
    } );
} );
