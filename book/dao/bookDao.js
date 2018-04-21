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
		var querySql = "select b.*, u.nickname from book b left join user u on u.id = b.userid limit ?,?";
		connection.query(querySql, [
			(pageNum - 1) * pageSize,
			pageSize
		], function(err, rows) {
			if(err) {
				console.log(err);
				res = [];
			} else {
				for(var i in rows) {
					res.push({
						bookID: rows[i].id,
						title: rows[i].title,
						author: rows[i].nickname,
						introduction: rows[i].introduction
					});
				}
			}
			connection.release();
			callback(res);
		});
	});
};

exports.queryBookCount = function(callback) {
	var res = 0;
	db.exec(function(err, connection) {
		var querySql = "select count(*) count from book";
		connection.query(querySql, function(err, rows) {
			if(err) {
				console.log(err);
				res = 0;
			} else {
				res = rows[0].count;
			}
			connection.release();
			callback(res);
		});
	});
};

exports.queryBookInfo = function(bookID, callback) {
	var res = {};
	db.exec(function(err, connection) {
		var querySql = "select b.*, c.count star, u.nickname from book b left join user u on u.id = b.userid left join (select s.bookid bookid, count(*) count from star s where s.bookid = ?) c on c.bookid = b.id where b.id = ?";
		connection.query(querySql, [bookID, bookID], function(err, rows) {
			if(err) {
				console.log(err);
				res = {};
			} else {
				res = {
					bookID: rows[0].id,
					title: rows[0].title,
					author: rows[0].nickname,
					introduction: rows[0].introduction,
					createTime: rows[0].create_time,
					lastUpdateTime: rows[0].last_update_time,
					star: rows[0].star == null ? 0 : rows[0].star,
					readmePath: ""
				};
			}
			connection.release();
			callback(res);
		});
	});
};

exports.queryBookInfoForUpdate = function(bookID, callback) {
	var res = {};
	db.exec(function(err, connection) {
		var querySql = "select * from book b where b.id = ?";
		connection.query(querySql, [bookID], function(err, rows) {
			if(err) {
				console.log(err);
				res = {};
			} else {
				res = {
					bookID: rows[0].id,
					title: rows[0].title,
					introduction: rows[0].introduction,
					git: rows[0].git,
					gitUsername: rows[0].git_username,
				};
			}
			connection.release();
			callback(res);
		});
	});
};