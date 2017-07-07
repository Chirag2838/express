var mongoose = require('mongoose')
var Schema = mongoose.schema;

var bookStatus = new Schema({
	dateOfIsssue : String,
	issuedTo : Number
});

var bookStatusInfo = mongoose.model('status',bookStatus);
module.exports = bookStatusInfo;