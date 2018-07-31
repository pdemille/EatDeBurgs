var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var port = process.env.PORT || 3000;

var app = express();

// Static unchanging content
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Ooverride for Delete
app.use(methodOverride("_method"));

//Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port);