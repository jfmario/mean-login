angular.module ( 'app' )
    .config ( function ( $routeProvider )
    {
        $routeProvider
            .when ( '/', {
                controller: 'LoginCtrl', templateUrl: 'login.html'
            })
            .when ( '/logout', {
                controller: 'LogoutCtrl', templateUrl: 'logout.html'
            })
            .when ( '/register', {
                controller: 'RegisterCtrl', templateUrl: 'register.html'
            });
    });
            