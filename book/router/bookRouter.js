var express = require('express');
var router = express.Router();

var bookService = require('../service/bookService.js');

router.use(function(req, res, next) {
  // .. some logic here .. like any other middleware
  next();
});

router.post('/create/add', function(req, res) {
	var bookInfo = {
		title: req.body.title,
		userid: req.body.userid,
		introduction: req.body.introduction,
		git: req.body.git,
		gitUsername: req.body.gitUsername,
		gitPassword: req.body.gitPassword,
	};

	bookService.addBook(bookInfo, function(result) {
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

router.get('/query/list', function(req, res) {
	
	res.json();
});

module.exports = router;