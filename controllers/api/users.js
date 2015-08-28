
var bcrypt = require ( 'bcrypt' );
var jwt = require ( 'jwt-simple' );
var router = require ( 'express' ).Router ();
var config = require ( '../../config' );
var User = require ( '../../models/user' );

router.get ( '/', function ( req, res, next )
{
    
    if ( !req.headers['x-auth'] ) { return res.send ( 401 ); }
    var auth = jwt.decode ( req.headers['x-auth'], config.secret );
    
    User.findOne ( { username: auth.username }, function ( err, user )
    {
        
        if ( err ) { return next ( err ); }
        
        res.json ( user );
    })
});
router.post ( '/', function ( req, res, next )
{
    console.log ( 'post new user', req.body.username );   
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