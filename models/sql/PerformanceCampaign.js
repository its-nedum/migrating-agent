const sequelize = require("sequelize");

const PerformanceCampaign = sequelize.define(
    "performancecampaign",
    {
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: sequelize.STRING,
        description: sequelize.STRING,
        shortlinkId: {
            type: sequelize.INTEGER,
            allowNull: true,
        },
        message: sequelize.STRING,
        schedule: sequelize.STRING,
        recipients: sequelize.STRING,
        status: sequelize.INTEGER,
        has_utm: sequelize.INTEGER,
        cost: sequelize.DOUBLE,
        platformtypeId: sequelize.INTEGER,
        condition: sequelize.STRING,
        within_days: sequelize.INTEGER,
        ref_campaign: {
            type: sequelize.STRING,
            allowNull: true,
        },
    },
    {}
);

module.exports = PerformanceCampaign;
