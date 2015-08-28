angular.module ( 'app' )
    .service( 'UserSvc', function ( $http )
    {
        var svc = this;
        svc.createUser = function ( username, password, emailAddress )
        {
            return $http.post ( '/api/users' ,
            {
                username: username,
                password: password,
                emailAddress: emailAddress
            });
        }
        svc.getUser = function ()
        {
            // user will be sent due to default header
            return $http.get ( '/api/users' )
                .success ( function ( data )
                {
                    window.localStorage.currentUser = data.username;
                });
        };
        svc.login = function ( username, password )
        {
            return $http.post ( '/api/sessions',
            {
                username: username,
                password: password
            })
                .then ( function (val)
                {
                    svc.token = val.data;
                    // add header to all future requests
                    $http.defaults.headers.common [ 'X-Auth' ] = val.data;
                    window.localStorage.token = val.data;
                    
                    return svc.getUser ();
                });
        };
        svc.logout = function ()
        {
            console.log ( 'User Service logging out.' );
            delete $http.defaults.headers.common [ 'X-Auth' ];
            delete window.localStorage.token;
        }
    });