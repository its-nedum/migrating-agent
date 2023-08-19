const sequelize = require("sequelize");

const Plan = sequelize.define("plans", {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize.STRING,
        allowNull: false,
        unique: "unique_plan_name",
    },
    displayname: {
        type: sequelize.STRING,
    },
    description: {
        type: sequelize.STRING,
        allowNull: true,
    },
    amount: {
        type: sequelize.DOUBLE,
        allowNull: false,
    },
    period: {
        type: sequelize.STRING,
        allowNull: false,
    },
    creditwallet: {
        type: sequelize.DOUBLE,
        allowNull: true,
        defaultValue: null,
    },
    paystackplanid: {
        type: sequelize.STRING,
        allowNull: true,
    },
    sms_contactsize: {
        type: sequelize.STRING,
        allowNull: true,
        defaultValue: null,
    },
    sms_campaignaccess: {
        type: sequelize.STRING,
        defaultValue: "full", // full || restricted
    },
    discountrate: {
        type: sequelize.DOUBLE,
        allowNull: true,
    },
    sms_contactaccess: {
        type: sequelize.STRING,
        allowNull: true,
        defaultValue: "full", // full || restricted
    },
    sms_shorturlaccess: {
        type: sequelize.STRING,
        allowNull: true,
        defaultValue: "full", // full || restricted
    },
    sms_integrationaccess: {
        type: sequelize.STRING,
        allowNull: true,
        defaultValue: "full", // full || restricted
    },
    invites: {
        type: sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
    },
    discountafter: {
        type: sequelize.INTEGER,
        allowNull: false,
    },
    platform: {
        type: sequelize.STRING,
        allowNull: false,
    },
    freetrialperiod: {
        type: sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
    },
    conv_automationflow: {
        type: sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
    },
    conv_agentsinvite: {
        type: sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
    },
    conv_channels: {
        type: sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
    },
    conv_contactsize: {
        type: sequelize.STRING,
        allowNull: true,
        defaultValue: null,
    },
    country: {
        type: sequelize.STRING,
        allowNull: false,
    },
    fastspringplanid: {
        type: sequelize.STRING,
        allowNull: true,
    },
});

module.exports = Plan;
