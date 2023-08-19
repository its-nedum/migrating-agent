const sequelize = require("sequelize");

const Campaign = sequelize.define(
    "campaign",
    {
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: sequelize.INTEGER,
        senderId: sequelize.INTEGER,
        rcsAgentId: sequelize.INTEGER,
        name: sequelize.STRING,
        description: sequelize.STRING,
        type: sequelize.STRING,
        rcsCampaignId: sequelize.STRING, // the ID of template used for this rcs campaign
        shortlinkId: {
            type: sequelize.INTEGER,
            allowNull: true,
        },
        message: sequelize.STRING,
        schedule: sequelize.STRING,
        recipients: sequelize.STRING,
        status: sequelize.STRING,
        batchesLeft: sequelize.INTEGER,
        batchesAmount: sequelize.DOUBLE,
        has_utm: sequelize.INTEGER,
        cost: sequelize.DOUBLE,
        platformtypeId: sequelize.INTEGER,
        condition: sequelize.STRING,
        within_days: sequelize.INTEGER,
        ref_campaign: {
            type: sequelize.STRING,
            allowNull: true,
        },
        message_type: {
            allowNull: true,
            type: sequelize.JSON, // {isPersonalized: true, placholders: [firstname, email]}
        },
    },
    {
        tableName: "campaigns",
    }
);


module.exports = Campaign;
