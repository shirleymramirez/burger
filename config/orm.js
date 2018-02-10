var connection = require("../config/connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
    selectAll: function(tableName, callback) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function(err, result) {
            if (err) throw err;
            console.log(result);
            callback(result);
        });
    },
    insertOne: function(tableName, valueOfColumns, callback) {
        var queryString = "INSERT INTO ?? VALUES ??";
        connection.query(queryString, [tableName, valueOfColumns], function(err, result) {
            if (err) throw err;
            console.log(result);
            callback(result);
        });
    },
    updateOne: function(tableName, columnName, valueOfColumn, callback) {
        var queryString = "UPDATE ?? SET ?? = ?";
        connection.query(queryString, [tableName, columnName, valueOfColumn], function(err, result) {
            if (err) throw err;
            console.log(result);
            callback(result);
        });
    }
};
module.exports = orm;