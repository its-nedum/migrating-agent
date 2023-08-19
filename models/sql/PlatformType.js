const sequelize = require("sequelize");

const Platformtype = sequelize.define(
    "platformtype",
    {
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: sequelize.STRING,
    },
    {}
);

module.exports = Platformtype;
