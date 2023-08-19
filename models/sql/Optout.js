const sequelize = require("sequelize");

const Optout = sequelize.define("optout", {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    contactId: sequelize.STRING,
    userId: sequelize.INTEGER,
    platform: sequelize.STRING,
});

module.exports = Optout;
