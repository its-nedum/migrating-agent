const sequelize = require("sequelize");

const Draft = sequelize.define("draft", {
    userId: sequelize.INTEGER,
    category: sequelize.STRING, // draft || duplicate
    name: sequelize.STRING,
    groups: sequelize.JSON,
    segments: sequelize.JSON,
    messages: sequelize.JSON,
    type: sequelize.STRING,
    hasFollowUp: sequelize.BOOLEAN,
    within_days: sequelize.BOOLEAN,
    condition: sequelize.JSON,
    skip_dnd: sequelize.BOOLEAN,
    add_optout: sequelize.BOOLEAN,
    add_optin: sequelize.BOOLEAN,
    to_optin: sequelize.BOOLEAN,
    to_awoptin: sequelize.BOOLEAN,
    add_utm: sequelize.BOOLEAN,
    schedule: sequelize.JSON,
    shorturls: sequelize.JSON,
    senders: sequelize.JSON,
    rcs_agents: sequelize.JSON,
});

module.exports = Draft;
