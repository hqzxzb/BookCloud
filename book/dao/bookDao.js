var db = require('../../db/db.js');
var uuid = require('uuid/v4');

exports.addBook = function(book, callback) {
	var res = true;
	db.exec(function(err, connection) {
		var bookInsertSQL = "insert into book values(?, ?, ?, ?, ?, ?, ?, ?, ?)";
		var createTime = new Date();
		connection.query(bookInsertSQL, [uuid().replace(/\-/g, ''),
			book.title,
			book.userid,
			book.introduction,
			createTime,
			createTime,
			book.git,
			book.gitUsername,
			book.gitPassword
		], function(err, result) {
			if(err) {
				res = false;
			}
			connection.release();
			callback(res);
		});
	});
};

exports.queryBookList = function(pageNum, pageSize, callback) {
	var res = [];
	db.exec(function(err, connection) {
		var querySql = "select * from book limit ?,?";
		connection.query(querySql, [
			(pageNum - 1) * pageSize,
			pageSize
		], function(err, rows) {
			if(err) {
				res = [];
			} else {
				for(var i in rows) {
					res.push({
						bookID: rows[i].id,
						title: rows[i].title,
						author: rows[i].userid,
						introduction: rows[i].introduction
					});
				}
			}
			connection.release();
			callback(res);
		});
	});
};