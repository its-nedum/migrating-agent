const sequelize = require("sequelize");

const Settingsnetworkrcs = sequelize.define("settingsnetworks_rcs", {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        allowNull: false,
        type: sequelize.STRING,
    },
    prefix: {
        allowNull: false,
        type: sequelize.STRING,
    },
    countryId: {
        allowNull: false,
        type: sequelize.INTEGER,
    },
    cost: {
        allowNull: false,
        type: sequelize.DOUBLE,
    },
    type: {
        allowNull: false,
        type: sequelize.ENUM,
        type: Object.values(CAMPAIGN_TYPES),
    },
});

module.exports = Settingsnetworkrcs;
