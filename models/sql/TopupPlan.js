const sequelize = require("sequelize");

const TopupPlan = sequelize.define("topupplans", {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: sequelize.STRING,
        unique: true,
    },
    displayname: {
        type: sequelize.STRING,
    },
    amount: {
        type: sequelize.INTEGER,
    },
    slug: {
        type: sequelize.STRING,
        unique: true,
    },
    currencyId: {
        type: sequelize.INTEGER,
    },
    hasBasePrice: {
        type: sequelize.BOOLEAN,
        default: 1,
    },
    description: {
        type: sequelize.TEXT,
    },
});

module.exports = TopupPlan;
