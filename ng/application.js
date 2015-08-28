angular.module ( 'app' )
    .controller ( 'ApplicationCtrl', function ( $rootScope, $scope, $http, UserSvc )
    {
        
        if ( window.localStorage.token )
        {
            console.log ( 'Remembering', window.localStorage.token );
            $http.defaults.headers.common [ 'X-Auth' ] = window.localStorage.token;
            UserSvc.getUser ();
            $scope.currentUser = {
                username: window.localStorage.currentUser
            };
        }
        
        // respond to emissions from LogoutCtrl
        $scope.$on ( 'logout', function ( _ )
        {
            delete $scope.currentUser;
        });
        // respond to emissions from LoginCtrl
        $scope.$on ( 'login', function ( _, user )
        {
            $scope.currentUser = user;
        });
    });