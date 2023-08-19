const sequelize = require("sequelize");

const RcsTemplateMessage = sequelize.define("rcstemplatemessages", {
    userId: sequelize.INTEGER,
    rcsagentId: sequelize.INTEGER,
    templateType: {
        allowNull: false,
        type: sequelize.STRING,
    },
    templateId: {
        allowNull: true,
        type: sequelize.STRING,
    },
    banner: {
        allowNull: false,
        type: sequelize.TEXT,
    },
    title: {
        allowNull: false,
        type: sequelize.STRING,
    },
    description: {
        allowNull: false,
        type: sequelize.STRING,
    },
    shorturlId: {
        type: sequelize.INTEGER,
        default: 0,
    },
    fallback_sms: {
        allowNull: false,
        type: sequelize.STRING,
    },
    status: {
        type: sequelize.BOOLEAN,
        default: false,
    },
});

module.exports = RcsTemplateMessage;
