var mysql = require('mysql');
var dbConf = require('../config/dbConf.js');
var uuid = require('uuid/v4');

var pool = mysql.createPool(dbConf);

exports.addBook = function(book, callback) {
	var res = true;
	pool.getConnection(function(err, connection) {
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