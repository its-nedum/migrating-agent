const sequelize = require("sequelize");

const Role = sequelize.define("role", {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize.STRING,
        allowNull: false,
    },
});

module.exports = Role;
