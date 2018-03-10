var express = require('express');
var app = express();

app.use(express.static('static'));

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
			title: "Book " + req.query.page,
			author: "ZHAO BO",
			introduction: "Some quick example text to build on the card title and make up the bulk of the card's content."
		},
		{
			title: "Book Title",
			author: "ZHAO BO",
			introduction: "Some quick example text to build on the card title and make up the bulk of the card's content."
		},
		{
			title: "Book Title",
			author: "ZHAO BO",
			introduction: "Some quick example text to build on the card title and make up the bulk of the card's content."
		},
		{
			title: "Book Title",
			author: "ZHAO BO",
			introduction: "Some quick example text to build on the card title and make up the bulk of the card's content."
		},
		{
			title: "Book Title",
			author: "ZHAO BO",
			introduction: "Some quick example text to build on the card title and make up the bulk of the card's content."
		},
		{
			title: "Book Title",
			author: "ZHAO BO",
			introduction: "Some quick example text to build on the card title and make up the bulk of the card's content."
		},
		{
			title: "Book Title",
			author: "ZHAO BO",
			introduction: "Some quick example text to build on the card title and make up the bulk of the card's content."
		},
		{
			title: "Book Title",
			author: "ZHAO BO",
			introduction: "Some quick example text to build on the card title and make up the bulk of the card's content."
		}
	]);
})

var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});