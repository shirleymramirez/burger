var express = require("express");
var burger = require("../models/burger.js");

var app = express();

// Routes
app.get("/", function(req, res) {

    burger.selectAll(function(result) {
        res.render("index", { burgers: result });
    });
});

app.post("/api/burgers", function(req, res) {});

app.put("", function(req, res) {});

app.delete("", function(req, res) {});


module.exports = app;