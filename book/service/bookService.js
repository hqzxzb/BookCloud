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

exports.queryBookCount = function(callback) {
	bookDao.queryBookCount(function(result) {
		callback(result);
	});
};

exports.queryBookInfo = function(bookID, callback) {
	bookDao.queryBookInfo(bookID, function(result) {
		callback(result);
	});
};

exports.queryBookInfoForUpdate = function(bookID, callback) {
	bookDao.queryBookInfoForUpdate(bookID, function(result) {
		callback(result);
	});
};