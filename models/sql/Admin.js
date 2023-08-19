const sequelize = require("sequelize");

const Admin = sequelize.define(
    "admin",
    {
        name: {
            type: sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: sequelize.STRING,
            allowNull: false,
            unique: "unique_user_email",
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: sequelize.STRING,
            allowNull: false,
        },
        role: {
            type: sequelize.STRING,
            defaultValue: "admin",
        },
    },
    {
        tableName: "admins",
    }
);

module.exports = Admin;
