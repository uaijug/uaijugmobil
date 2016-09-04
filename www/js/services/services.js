angular.module( 'starter.services', [ 'ngResource' ] )

.factory( 'SessionService', function ( $resource, API_BASE_URL ) {
    return $resource( API_BASE_URL + '/api/sessions/:sessionId');
} )

.factory( 'SessionByEventService', function ( $resource, API_BASE_URL ) {
    return $resource( API_BASE_URL + '/api/sessions/event/:eventId' );
} )

.factory( 'EventService', function ( $resource, API_BASE_URL ) {
    return $resource( API_BASE_URL + '/api/events/:eventId' );
} )

.factory( 'SpeakerService', function ( $resource, API_BASE_URL ) {
    return $resource( API_BASE_URL + '/api/speakers/:speakerId' );
} )


.factory( 'NewsService', function ( $resource, API_BASE_URL) {
    return $resource( API_BASE_URL + '/api/news/:newsId' );
} );
