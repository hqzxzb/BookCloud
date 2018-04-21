var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('static'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
	extended: true
})); // for parsing application/x-www-form-urlencoded

var bookRouter = require('./book/router/bookRouter.js');

app.use('/book', bookRouter);

app.get('/test', function(req, res) {
	res.send('Hello World!');
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

var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});