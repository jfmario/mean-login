
var jwt = require ( 'jwt-simple' );
var config = require ( './config' );

// custom middleware provides access to username in all requests that send one
module.exports = function ( req, res, next )
{
    
    if ( req.headers [ 'x-auth'] )
    {
        req.auth = jwt.decode ( req.headers [ 'x-auth' ], config.secret );
    }
    
    next ();
};