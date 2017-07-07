var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var book = new Schema({
	name : String,
	author : String,
	bookId : Number,
	Edition : Number,
	dateOfIssue : Date,
	issuedTo : Number,
	status : Boolean
});
var bookInfo = mongoose.model('book',book);
module.exports = bookInfo;