var bookDao = require('../dao/bookDao.js');

exports.addBook = function(book, callback) {
	bookDao.addBook(book, function(result) {
		callback(result);
	});
};

exports.queryBookList = function(pageNum, pageSize, callback) {
	bookDao.queryBookList(pageNum, pageSize, function(result) {
		callback(result);
	});
};