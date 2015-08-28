angular.module ( 'app' )
    .controller ( 'LogoutCtrl', function ( $scope, UserSvc )
    {
        UserSvc.logout ();
        // makes this availabe to ApplicationCtrl
        $scope.$emit ( 'logout' );
    });