var connection = require("../config/connection.js");

var orm = {
	selectAll: function (input, cb) {
		var queryString = "SELECT * FROM " + input + ";";
		connection.query(queryString, function(err, results) {
			if (err) {
				throw err;
			}
			console.log("orm results: ");
			console.log(results);
			console.log("orm end results");
			cb(results);
		});
	},

	insertOne: function (table, val, cb) {
		var queryString = "INSERT INTO " + table + " (burger_name) VALUES (?)"
		connection.query(queryString, val, function(err, results) {
			if (err) {
				throw err;
			}
			console.log(results);
			cb(results);
		});
	},

	updateOne: function (table, val, colId, cb) {
		var queryString = "UPDATE " + table + " SET devoured = "+ val + " WHERE " + colId;
		connection.query(queryString, function(err, res) {
			if (err) {
				throw err;
			}
			console.log(res);
			cb(res);
		}); 
	}
}

module.exports = orm;
