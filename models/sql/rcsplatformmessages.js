const sequelize = require("sequelize");

const RcsPlatformMessages = sequelize.define("rcsplatformmessages", {
    userId: sequelize.INTEGER,
    rcsagentId: sequelize.INTEGER,
    name: sequelize.STRING,
    code: sequelize.STRING,
    agentMessageType: sequelize.STRING,
    botId: sequelize.STRING,
    orientation: sequelize.STRING,
    alignment: sequelize.STRING,
    height: sequelize.STRING,
    width: sequelize.STRING,
    isFallbackEnabled: sequelize.BOOLEAN,
    isUrcsFallbackEnable: sequelize.BOOLEAN,
    templateId: {
        allowNull: true,
        type: sequelize.STRING,
    },
    shorturlId: {
        type: sequelize.INTEGER,
        default: 0,
    },
    type: {
        allowNull: false,
        type: sequelize.ENUM,
    },
    fallbackText: {
        // allowNull: false,
        type: sequelize.STRING,
    },
    rcsMessage: {
        allowNull: false,
        type: sequelize.JSON,
    },
    status: {
        type: sequelize.BOOLEAN,
        default: false,
    },
    templateType: {
        allowNull: false,
        type: sequelize.ENUM,
    }
});

module.exports = RcsPlatformMessages;
