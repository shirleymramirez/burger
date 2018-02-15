var connection = require("../config/connection.js");

// Object Relational Mapper (ORM)

// for generating mysql syntax
// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] 
// - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}
// / Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        arr.push(key + "=" + ob[key]);
    }

    return arr.toString();
}

// Object for all our SQL statement functions. 
var orm = {
    selectAll: function(tableName, callback) {
        var queryString = "SELECT * FROM ?? ";
        connection.query(queryString, [tableName], function(err, result) {
            if (err) throw err;
            console.log("selectALL", result);
            callback(result);
        });
    },

    insertOne: function(tableName, columns, valueOfColumns, callback) {
        var queryString = "INSERT INTO " + tableName;

        queryString += " (";
        queryString += columns.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(valueOfColumns.length);
        queryString += ") ";

        connection.query(queryString, valueOfColumns, function(err, result) {
            if (err) throw err;
            console.log("insertOne", result);
            callback(result);
        });
    },

    updateOne: function(tableName, objColumnValues, condition, callback) {
        var queryString = "UPDATE " + tableName;

        queryString += " SET ";
        queryString += objToSql(objColumnValues);
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function(err, result) {
            if (err) throw err;
            console.log("updateOne", result);
            callback(result);
        });
    }
};

module.exports = orm;