var mysql = require('mysql');
var dbConf = require('../config/dbConf.js');

var pool = mysql.createPool(dbConf);

exports.exec = function(callback) {
	pool.getConnection(function(err, connection) {
		callback(err, connection);
	});
};