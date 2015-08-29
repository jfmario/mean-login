var express = require ( 'express' );
// console.log (express);
var router = express.Router ();

router.get ( '/', function ( req, res) {
    res.sendfile ( 'layouts/app.html' );
});
// make javascript, css, and html pages available to the client
router.use ( express.static ( __dirname + '/../assets' ) );
router.use ( express.static ( __dirname + '/../templates' ) );
module.exports = router;