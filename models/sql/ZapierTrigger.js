const sequelize = require("sequelize");

const Zapiertrigger = sequelize.define("zapiertrigger", {
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: sequelize.INTEGER,
        unique: "userId_name_composite",
    },
    name: {
        type: sequelize.STRING,
        unique: "userId_name_composite",
    },
    hookUrl: {
        type: sequelize.STRING,
        unique: "hookurl_composite",
    },
});

module.exports = Zapiertrigger;
