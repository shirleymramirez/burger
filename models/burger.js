var orm = require("./config/orm.js");

orm.selectAll("burger_name");

orm.insertOne("burger_name", "Ham and Cheese");

orm.updateOne("burger_name", "Cheese and Bacon");

module.exports = orm;