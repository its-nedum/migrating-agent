const sequelize = require("sequelize");

const Customoptin = sequelize.define(
    "customoptin",
    {
        userId: {
            type: sequelize.INTEGER,
            primaryKey: true,
        },
        optin_type: sequelize.STRING,
        optin_grps: sequelize.STRING,
        optin_channels: sequelize.STRING,
        optin_msg1: sequelize.STRING,
        msg1_channels: sequelize.STRING,
        optin_msg2: sequelize.STRING,
        msg2_channels: sequelize.STRING,
        optin_generallink: sequelize.STRING,
    },
    {}
);

// models.Group.belongsToMany(models.Contact, { through: models.ContactGroup, foreignKey: 'groupId' });

module.exports = Customoptin;
