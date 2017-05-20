var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3308,
  host: "localhost",
  user: "ibad",
  password: "Ibad123",
  database: "burger_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
