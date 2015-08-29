
var bcrypt = require ( 'bcrypt' );
var jwt = require ( 'jwt-simple' );
var router = require ( 'express' ).Router ();
var config = require ( '../../config' );
var User = require ( '../../models/user' );

/*
    POST request to api/session
    Authenticates username and password and supplies token using
    config.secret.
*/
router.post ( '/', function (req, res, next )
{
    console.log ( 'login attempt by', req.body.username );
    User.findOne( { username: req.body.username } )
        .select ( 'password' )
        .select ( 'username' )
        .exec ( function ( err, user )
        {
            
            if ( err ) { return next ( err ); }
            if ( !user ) { return res.send ( 401 ); }
            
            console.log ( 'login by', req.body.username, 'successful' );
            bcrypt.compare ( req.body.password, user.password,
                function ( err, valid )
                {
                    
                    if ( err ) { return next ( err ); }
                    if ( !user ) { return res.send ( 401 ); }
                    
                    var token = jwt.encode ( { username: user.username },
                        config.secret );
                    res.send ( token );
                });
        });
});
module.exports = router;