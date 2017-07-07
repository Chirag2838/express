var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var student = new Schema({
	fName : String,
	lName : String,
	pNumber : Number,
	rNumber : Number,
	bIssued : String
});
var studentInfo = mongoose.model('student',student);
module.exports = studentInfo;