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


module.exports = burger;