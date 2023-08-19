const sequelize = require("sequelize");

const CampaignGroup = sequelize.define(
    "campaign_group",
    {
        campaignId: {
            type: sequelize.INTEGER,
            primaryKey: true,
        },
        groupId: {
            type: sequelize.INTEGER,
            primaryKey: true,
        },
        groupName: sequelize.STRING,
    },
    {
        timestamps: false,
    }
);

module.exports = CampaignGroup;
