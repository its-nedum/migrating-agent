const sequelize = require("sequelize");

const Subscription = sequelize.define("subscriptions", {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    planId: {
        type: sequelize.INTEGER,
    },
    userId: {
        type: sequelize.INTEGER,
        allowNull: false,
    },
    paymentref: {
        type: sequelize.STRING,
        allowNull: true,
    },
    expiry: {
        type: sequelize.DATE,
        allowNull: false,
    },
    isverified: {
        type: sequelize.BOOLEAN,
        allowNull: true,
    },
    paystacksubcode: {
        type: sequelize.STRING,
        allowNull: true,
        defaultValue: null,
    },
    paystacktoken: {
        type: sequelize.STRING,
        allowNull: true,
        defaultValue: null,
    },
    fastspringsubcode: {
        type: sequelize.STRING,
        allowNull: true,
        defaultValue: null,
    },
    status: {
        type: sequelize.STRING,
        allowNull: true,
        defaultValue: null, // 'active', 'expired', 'deactivated'
    },
});

module.exports = Subscription;
