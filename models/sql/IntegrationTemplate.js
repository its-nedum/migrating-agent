const sequelize = require("sequelize");

const IntegrationTemplate = sequelize.define("integrationtemplates", {
    userId: sequelize.INTEGER,
    integrationId: sequelize.INTEGER,
    platform: {
        allowNull: false,
        type: sequelize.STRING,
    },
    messageType: {
        allowNull: false,
        type: sequelize.STRING,
    },
    templateData: {
        allowNull: true,
        type: sequelize.JSON,
    },
    status: {
        type: sequelize.BOOLEAN,
        default: true,
    },
});

module.exports = IntegrationTemplate;
