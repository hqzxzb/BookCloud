var db = require('../db/db.js');

exports.addBook = function(book, callback) {
	db.addBook(book, function(result) {
		callback(result);
	});
};