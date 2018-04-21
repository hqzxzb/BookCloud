var express = require('express');
var router = express.Router();
var msg = require('../../message/msg.js');
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
			res.json(msg.success("Add Book Success !"));
		} else {
			res.json(msg.failure("Add Book Failure !"));
		}
	});
});

router.get('/query/list', function(req, res) {
	bookService.queryBookList(parseInt(req.query.pageNum), parseInt(req.query.pageSize), function(result) {
		res.json(msg.success("Query book list success !", result));
	});
});

router.get('/query/count', function(req, res) {
	bookService.queryBookCount(function(result) {
		res.json(msg.success("Query book count success !", result));
	});
});

router.get('/query/info', function(req, res) {
	bookService.queryBookInfo(req.query.bookID, function(result) {
		res.json(msg.success("Query book info success !", result));
	});
});

router.get('/query/update/info', function(req, res) {
	bookService.queryBookInfoForUpdate(req.query.bookID, function(result) {
		res.json(msg.success("Query book info for update success !", result));
	});
});


module.exports = router;