var express = require('express')
var port = 3000||process.env.PORT;
var app = express()
var bodyParser = require('body-parser')
var student = require('./models/studentSchema.js')
var books = require('./models/bookSchema.js')
var mongoose = require('mongoose')
mongoose.connect('mongodb://chirag2838:chirag2838#@ds139942.mlab.com:39942/comchirag1')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended:true
}));

app.post('/student',function(req,res){
	firstName = req.body.fName;
	lastName = req.body.lName;
	rollNumber = req.body.rNumber;
	phoneNumber = req.body.pNumber;
	bookIssued = req.body.bIssued;
	var studentInfo = new student({
		fName : firstName,
		lName : lastName,
		rNumber : rollNumber,
		pNumber : phoneNumber,
		bIssued : bookIssued
	});
	studentInfo.save(function(err,data)
	{
		if(err)
		{
			console.log(err)
		}
		else
		{
			console.log("student data saved")
		}
		res.json(data)
	})
});

app.post('/book',function(req,res){
	Name = req.body.name;
	Author = req.body.author;
	BookId = req.body.bookId;
	Edition = req.body.edition;
	DateOfIssue = req.body.dateOfIssue;
	IssuedTo = req.body.issuedTo;

	var bookInfo = new book({
		name : Name,
		author : Author,
		bookId : BookId,
		edition : Edition,
		dateOfIssue : DateOfIssue,
		issuedTo : IssuedTo
	});
	bookInfo.save(function(err,data){
		if(err){
			console.log(err)
		}
		else
		{
			console.log("book data saved")
		}
		res.json(data);
	})
});

app.get('/bookissue',function(req,res){
	name1 = req.body.name,
	rollNumber1 = req.body.rNumber;
	books.update({name:name1},{issuedTo:rollNumber1,status:false});
});

app.listen(port,function(){
	console.log('server is running at 3000')
})