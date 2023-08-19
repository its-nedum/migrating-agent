const sequelize = require("sequelize");

const UserShopifyData = sequelize.define("user_shopify_data", {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: sequelize.INTEGER,
        allowNull: false,
    },
    storeUrl: {
        type: sequelize.STRING,
        allowNull: true,
    },
    processing_active: {
        type: sequelize.BOOLEAN,
        defaultValue: 0,
    },
    processing_template: {
        type: sequelize.TEXT,
        allowNull: true,
    },
    completed_active: {
        type: sequelize.BOOLEAN,
        defaultValue: 0,
    },
    completed_template: {
        type: sequelize.TEXT,
        allowNull: true,
    },
    onhold_active: {
        type: sequelize.BOOLEAN,
        defaultValue: 0,
    },
    onhold_template: {
        type: sequelize.TEXT,
        allowNull: true,
    },
    refunded_active: {
        type: sequelize.BOOLEAN,
        defaultValue: 0,
    },
    refunded_template: {
        type: sequelize.TEXT,
        allowNull: true,
    },
    failed_active: {
        type: sequelize.BOOLEAN,
        defaultValue: 0,
    },
    failed_template: {
        type: sequelize.TEXT,
        allowNull: true,
    },
    abandoned_active: {
        type: sequelize.BOOLEAN,
        defaultValue: 0,
    },
    abandoned_template: {
        type: sequelize.TEXT,
        allowNull: true,
    },
});

module.exports = UserShopifyData;