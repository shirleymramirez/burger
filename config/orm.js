var connection = require("../config/connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection

// for generating mysql syntax
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        arr.push(key + "=" + ob[key]);
    }

    return arr.toString();
}


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