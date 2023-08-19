const sequelize = require("sequelize");

const Tmpoptin = sequelize.define(
    "tmpoptin",
    {
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        firstname: sequelize.STRING,
        lastname: sequelize.INTEGER,
        phone: {
            type: sequelize.STRING,
            unique: "phone_user_composite",
        },
        userId: {
            type: sequelize.INTEGER,
            unique: "phone_user_composite",
        },
        countryId: {
            type: sequelize.INTEGER,
            unique: "phone_user_composite",
        },
        misc: sequelize.STRING,
    },
    {}
);

module.exports = Tmpoptin;
