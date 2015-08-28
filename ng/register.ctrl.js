angular.module ( 'app' )
    .controller ( 'RegisterCtrl', function ( $scope, UserSvc )
    {
        $scope.register = function ( username, password, emailAddress )
        {
            console.log ('register form');
            UserSvc.createUser ( username, password, emailAddress )
                .then ( function ( response ) {
                    $scope.login ( username, password );
                });
        };
        $scope.login = function ( username, password )
        {
            UserSvc.login ( username, password )
                .then ( function ( response )
                {
                    // makes this availabe to ApplicationCtrl
                    $scope.$emit ( 'login', response.data );
                });
        };
    });