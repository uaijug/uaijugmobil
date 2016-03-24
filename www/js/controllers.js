angular.module( 'starter.controllers', [ 'starter.services' ] )

.controller( 'AppCtrl', function ( $scope, $ionicModal, $timeout ) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl( 'templates/login.html', {
        scope: $scope
    } ).then( function ( modal ) {
        $scope.modal = modal;
    } );

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
        $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
        $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
        console.log( 'Doing login', $scope.loginData );

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout( function () {
            $scope.closeLogin();
        }, 1000 );
    };
} )

.controller( 'DashboardCtrl', function ( $scope, NewsService ) {
    $scope.newsList = NewsService.query();
} )

.controller( 'SessionsCtrl', function ( $scope, $stateParams, SessionByEventService ) {
    $scope.sessions = SessionByEventService.query( {
          eventId: $stateParams.eventId
    } );
} )

.controller( 'SessionCtrl', function ( $scope, $stateParams, SessionService ) {
    $scope.session = SessionService.get( {
        sessionId: $stateParams.sessionId
    } );
} )

.controller( 'EventsCtrl', function ( $scope, EventService ) {
    $scope.events = EventService.query();
} )

.controller( 'EventCtrl', function ( $scope, $stateParams, EventService, SessionByEventService ) {
    $scope.event = EventService.get( {
        eventId: $stateParams.eventId
    } );

    $scope.sessions = SessionByEventService.query( {
            eventId: $stateParams.eventId
    } );
} )

.controller( 'SpeakerCtrl', function ( $scope, $stateParams, SpeakerService ) {
    $scope.speaker = SpeakerService.get( {
        speakerId: $stateParams.speakerId
    } );
} )

.controller( 'PlaylistsCtrl', function ( $scope ) {
    $scope.playlists = [ {
        title: 'Reggae',
        id: 1
    }, {
        title: 'Chill',
        id: 2
    }, {
        title: 'Dubstep',
        id: 3
    }, {
        title: 'Indie',
        id: 4
    }, {
        title: 'Rap',
        id: 5
    }, {
        title: 'Cowbell',
        id: 6
    } ];
} )

.controller( 'PlaylistCtrl', function ( $scope, $stateParams ) {} );
