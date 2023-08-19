const sequelize = require("sequelize");

const Country = sequelize.define("country", {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
    },
    name: sequelize.STRING,
    abbreviation: sequelize.STRING,
    status: sequelize.INTEGER,
});


module.exports = Country;
