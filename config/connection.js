
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var orm = require("../config/orm.js");

var app = express();
var port = process.env.PORT || 8080;


// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));


// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 8889,
  password: "root",
  database: "burgers_db"
});

connection.connect(function(err){
	if (err){
		console.error("error connection: " + err.stack);
		return;
	}

	console.log("connected as id " + connection.threadId);
});

module.exports = connection;

// app.get("/", function(req, res){

// 	connection.query("SELECT * FROM burgers;" function(err, data){
// 		if (err) throw err;

// 		res.render("index", {burgersArray: data});
// 	});
// });
// app.post("/", function(req, res){
// 	connection.query("INSERT INTO burgers (burger) VALUES (?)", [req.body.burger], function(err, res){
// 		if (err) throw err;

// 		res.redirect("/");
// 	});
// });
// app.delete("/:id", function(req, res) {
// 	connection.query("DELETE FROM burgers WHERE id = ?", [req.params.id], function(err, res){
// 		if (err) {
// 			throw err;
// 		}

// 		res.redirect("/");
// 	});
// });
// app.put()
// var routes = require("./controllers/catsController.js");

app.listen(port);