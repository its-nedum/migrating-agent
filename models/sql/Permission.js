const sequelize = require("sequelize");

const Permission = sequelize.define("permission", {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize.TEXT,
        allowNull: true,
    },
});

module.exports = Permission;
