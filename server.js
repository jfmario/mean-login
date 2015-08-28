
var express = require ( 'express' );
var bodyParser = require ( 'body-parser' );
var app = express();

// node module requirements
app.use ( bodyParser.json() );
// provide access to auth info for all requests that send it
app.use ( require ( './auth' ) );
// controllers - namespacing
app.use ( '/', require ( './controllers/static' ) );
// login system
app.use ( '/api/sessions', require ( './controllers/api/sessions' ) );
// login system
app.use ( '/api/users', require ( './controllers/api/users' ) );
var server = app.listen ( 8080, function () {
    console.log ( 'Server listening on', process.env.PORT);
});