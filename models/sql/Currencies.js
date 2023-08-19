const sequelize = require("sequelize");

const Currencies = sequelize.define("Currencies", {
    country: sequelize.STRING,
    abbreviation: sequelize.STRING,
    currency: sequelize.STRING,
});

module.exports = Currencies;
