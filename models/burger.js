var orm = require("../config/orm.js");

var burger = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(res) {
            callback(res);
        });
    },
    insertOne: function(columns, valueOfColumns, callback) {
        orm.insertOne("burgers", columns, valueOfColumns, function(res) {
            callback(res);
        });
    },
    updateOne: function(objColumnValue, condition, callback) {
        orm.updateOne("burgers", objColumnValue, condition, function(res) {
            callback(res);
        });


    }
};


module.exports = burger;