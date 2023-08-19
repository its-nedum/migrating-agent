const sequelize = require("sequelize");

const Topup = sequelize.define(
    "topup",
    {
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        amount: sequelize.DOUBLE,
        units: sequelize.DOUBLE,
    },
    {}
);


module.exports = Topup;
