
var bcrypt = require ( 'bcrypt' );
var jwt = require ( 'jwt-simple' );
var router = require ( 'express' ).Router ();
var config = require ( '../../config' );
var User = require ( '../../models/user' );

/*
    GET request to api/users
    Takes a token in the X-Auth header and responds with the username.
*/
router.get ( '/', function ( req, res, next )
{
    
    if ( !req.headers['x-auth'] ) { return res.send ( 401 ); }
    var auth = jwt.decode ( req.headers['x-auth'], config.secret );
    
    console.log ( 'GET username', auth.username );
    User.findOne ( { username: auth.username }, function ( err, user )
    {
        
        if ( err ) { return next ( err ); }
        
        res.json ( user );
    })
});
/*
    POST request to api/users
    Takes username, password, and emailAddress and creates a new user.
*/
router.post ( '/', function ( req, res, next )
{
    console.log ( 'create new user', req.body.username );   
    User.findOne ( { username: req.body.username }, function ( err, user )
    {
        
        if ( err ) { return next ( err ); }
        if ( user ) { return res.send ( 304 ); }
    });
    
    var user = new User ( { username: req.body.username, emailAddress: req.body.emailAddress } );
    
    bcrypt.hash ( req.body.password, 10, function ( err, hash )
    {
        
        if ( err ) { return next ( err ); }
        
        user.password = hash;
        user.save ( function ( err )
        {
            if ( err ) { return next ( err ); }
            
            res.send ( 201 );
        });
    });
});
module.exports = router;