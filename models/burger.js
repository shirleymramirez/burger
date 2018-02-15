// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(result) {
            callback(result);
        });
    },
    insertOne: function(columns, valueOfColumns, callback) {
        orm.insertOne("burgers", columns, valueOfColumns, function(result) {
            callback(result);
        });
    },
    updateOne: function(objColumnValues, condition, callback) {
        orm.updateOne("burgers", objColumnValues, condition, function(result) {
            callback(result);
        });
    }
};

// Export the database functions for the controller
module.exports = burger;