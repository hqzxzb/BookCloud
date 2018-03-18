var mysql = {
	host: 'localhost',
	port: 3306,
	database: 'bookcloud',
	user: 'root',
	password: 'root',
	connectionLimit: 100,
	acquireTimeout: 10000
};

module.exports = mysql;