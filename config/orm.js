var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
    selectAll: function(tableInput) {
        var queryString = "SELECT * FROM = ??";
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function(tableInput, valOfCol) {
        var queryString = "INSERT INTO ?? VALUES ??";
        connection.query(queryString, [tableInput, valOfCol], function(
            err,
            result
        ) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function(tableInput, colToSearch) {
        var queryString = "UPDATE ?? SET ?? = VALUES";
        connection.query(queryString, [tableInput, colToSearch], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
};
module.exports = orm;