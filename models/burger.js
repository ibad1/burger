var orm = require("../config/orm.js");

var burger = {

	selectAll: function(cb) {
		console.log("show all works");
    	orm.selectAll("burgers", function(res) {
	      cb(res);
	    });
	  },

	insertOne: function(val, cb) {
		console.log("insert works");
		orm.insertOne("burgers", val, function(res) {
			cb(res);	
	});
	},

	updateOne: function(val, colId, cb) {
		console.log("update works");
		orm.updateOne("burgers", val, colId, function(res) {
			cb(res);
		});
	}
}

module.exports = burger;