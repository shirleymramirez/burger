var express = require("express");
var burger = require("./models/burgers.js");

var app = express();

// Routes
app.get("", function(req, res) {
    burger.selectAll();
});

app.post("", function(req, res) {

});

app.put("", function(req, res) {

});

app.delete("", function(req, res) {

});


module.exports = app;