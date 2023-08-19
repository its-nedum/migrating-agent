const sequelize = require("sequelize");

const ContactGroup = sequelize.define(
    "contact_group",
    {
        contactId: {
            type: sequelize.INTEGER,
            primaryKey: true,
        },
        groupId: {
            type: sequelize.INTEGER,
            primaryKey: true,
        },
    },
    {
        timestamps: false,
    }
);

module.exports = ContactGroup;
