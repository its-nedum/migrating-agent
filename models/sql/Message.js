const sequelize = require("sequelize");

const Message = sequelize.define(
    "message",
    {
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        contactId: sequelize.STRING,
        campaignId: sequelize.STRING,

        perfcmpgnId: sequelize.STRING,
        // contactlink:    sequelize.STRING,
        contactlink: sequelize.STRING.BINARY,
        shortlinkId: {
            type: sequelize.INTEGER,
            allowNull: true,
        },
        platformtypeId: sequelize.INTEGER,
        destination: sequelize.STRING,
        aux_type_1: sequelize.STRING,
        aux_type_2: sequelize.STRING,
        aux_type_3: sequelize.STRING,
        aux_type_4: sequelize.STRING,
        aux_type_5: sequelize.STRING,
        clickcount: sequelize.INTEGER,
        deliverytime: sequelize.DATE,
        readtime: sequelize.DATE,
        firstclicktime: sequelize.DATE,
        message_id: sequelize.STRING,
        status: sequelize.INTEGER,
    },
    {}
);

module.exports = Message;
