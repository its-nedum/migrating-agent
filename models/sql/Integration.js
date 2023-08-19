const sequelize = require("sequelize");

const Integration = sequelize.define("integrations", {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: sequelize.INTEGER,
    platform: {
        allowNull: false,
        type: sequelize.STRING,
    },
    storeUrl: {
        allowNull: true,
        type: sequelize.STRING,
    },
    credentials: {
        allowNull: false,
        type: sequelize.JSON,
    },
    status: {
        type: sequelize.BOOLEAN,
        default: true,
    },
});

module.exports = Integration;
