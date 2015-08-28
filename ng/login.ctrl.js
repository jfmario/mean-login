angular.module ( 'app' )
    .controller ( 'LoginCtrl', function ( $scope, UserSvc )
    {
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