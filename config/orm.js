var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
    selectAll: function() {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, function(
            err,
            result
        ) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function() {
        var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function() {
        var queryString = "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

        connection.query(queryString, function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
};
module.exports = orm;