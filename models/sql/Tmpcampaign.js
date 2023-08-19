const sequelize = require("sequelize");

const Tmpcampaign = sequelize.define("tmpcampaign", {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: sequelize.STRING,
    description: sequelize.STRING,
    type: sequelize.STRING,
    shortlinkId: {
        type: sequelize.INTEGER,
        allowNull: true,
    },
    myshorturl: sequelize.STRING,
    grp: sequelize.STRING,
    message: sequelize.STRING,
    schedule: sequelize.STRING,
    recipients: sequelize.STRING,
    status: sequelize.INTEGER,
    senderId: sequelize.INTEGER,
    rcsAgentId: sequelize.INTEGER,
    skip_dnd: sequelize.STRING,
    has_utm: sequelize.INTEGER,
    to_optin: sequelize.INTEGER,
    to_awoptin: sequelize.INTEGER,
    add_optout: sequelize.INTEGER,
    add_optin: sequelize.INTEGER,
    cost: sequelize.DOUBLE,
    total_cost: sequelize.DOUBLE,
    platformtypeId: sequelize.INTEGER,
    within_days: sequelize.INTEGER,
    ref_campaign: sequelize.STRING,
});

module.exports = Tmpcampaign;
