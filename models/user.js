
// schema for User object in database
var db = require ( '../db' );
var user = db.Schema(
    {
        emailAddress: { type: String },
        username: { type: String, required: true },
        password: { type: String, required: true, select: false }
    });

module.exports = db.model ( 'User', user );