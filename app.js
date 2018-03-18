var express = require('express');
var bodyParser = require('body-parser');
var book = require('./book/book.js');

var app = express();

app.use(express.static('static'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
	extended: true
})); // for parsing application/x-www-form-urlencoded

app.get('/test', function(req, res) {
	res.send('Hello World!');
});

app.get('/query/book/count', function(req, res) {
	res.json({
		count: 100
	});
});

app.get('/query/book/list', function(req, res) {
	res.json([{
			bookID: "1",
			title: "Book " + req.query.page,
			author: "ZHAO BO",
			introduction: "Some quick example text to build on the card title and make up the bulk of the card's content."
		},
		{
			bookID: "2",
			title: "Book Title",
			author: "ZHAO BO",
			introduction: "Some quick example text to build on the card title and make up the bulk of the card's content."
		},
		{
			bookID: "3",
			title: "Book Title",
			author: "ZHAO BO",
			introduction: "Some quick example text to build on the card title and make up the bulk of the card's content."
		},
		{
			bookID: "4",
			title: "Book Title",
			author: "ZHAO BO",
			introduction: "Some quick example text to build on the card title and make up the bulk of the card's content."
		},
		{
			bookID: "5",
			title: "Book Title",
			author: "ZHAO BO",
			introduction: "Some quick example text to build on the card title and make up the bulk of the card's content."
		},
		{
			bookID: "6",
			title: "Book Title",
			author: "ZHAO BO",
			introduction: "Some quick example text to build on the card title and make up the bulk of the card's content."
		},
		{
			bookID: "7",
			title: "Book Title",
			author: "ZHAO BO",
			introduction: "Some quick example text to build on the card title and make up the bulk of the card's content."
		},
		{
			bookID: "8",
			title: "Book Title",
			author: "ZHAO BO",
			introduction: "Some quick example text to build on the card title and make up the bulk of the card's content."
		}
	]);
});

app.get('/query/book/info', function(req, res) {
	res.json({
		bookID: req.query.bookID,
		title: "Book Title",
		author: "ZHAO BO",
		introduction: "Some quick example text to build on the card title and make up the bulk of the card's content.",
		createTime: "2018-03-12 12:00:00",
		lastUpdateTime: "2018-03-12 20:30:43",
		star: 10,
		readmePath: ""
	});
});

app.get('/query/user/book/list', function(req, res) {
	res.json([{
			title: "Book Title",
			star: 10,
			introduction: "Some quick example text to build on the card title and make up the bulk of the card's content."
		},
		{
			title: "Book Title",
			star: 10,
			introduction: "Some quick example text to build on the card title and make up the bulk of the card's content."
		},
		{
			title: "Book Title",
			star: 10,
			introduction: "Some quick example text to build on the card title and make up the bulk of the card's content."
		},
		{
			title: "Book Title",
			star: 10,
			introduction: "Some quick example text to build on the card title and make up the bulk of the card's content."
		},
		{
			title: "Book Title",
			star: 10,
			introduction: "Some quick example text to build on the card title and make up the bulk of the card's content."
		},
		{
			title: "Book Title",
			star: 10,
			introduction: "Some quick example text to build on the card title and make up the bulk of the card's content."
		},
		{
			title: "Book Title",
			star: 10,
			introduction: "Some quick example text to build on the card title and make up the bulk of the card's content."
		},
		{
			title: "Book Title",
			star: 10,
			introduction: "Some quick example text to build on the card title and make up the bulk of the card's content."
		}
	]);
});

app.get('/query/book/update/info', function(req, res) {
	res.json({
		bookID: req.query.bookID,
		title: "Book Title",
		introduction: "Some quick example text to build on the card title and make up the bulk of the card's content.",
		git: "https://github.com/hqzxzb/BookCloud.git",
		gitUsername: "test"
	});
});

app.post('/create/book/add', function(req, res) {
	var bookInfo = {
		title: req.body.title,
		userid: req.body.userid,
		introduction: req.body.introduction,
		git: req.body.git,
		gitUsername: req.body.gitUsername,
		gitPassword: req.body.gitPassword,
	};

	book.addBook(bookInfo, function(result) {
		if(result) {
			res.json({
				code: "0000",
				msg: "Add Book Success !"
			});
		} else {
			res.json({
				code: "9999",
				msg: "Add Book Failure !"
			});
		}
	});
});

var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});