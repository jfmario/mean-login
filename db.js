
var mongoose = require ( 'mongoose' );
mongoose.connect( 'mongodb://localhost/db', function () {
    console.log ( 'mongodb connected' );
});
module.exports = mongoose;