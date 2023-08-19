const sequelize = require("sequelize");

const RcsAgent = sequelize.define("rcsagents", {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: sequelize.INTEGER,
        unique: true,
    },
    display_name: sequelize.STRING,
    logo: sequelize.STRING,
    banner: sequelize.STRING,
    brand_color: sequelize.STRING,
    client_id: {
        allowNull: true,
        type: sequelize.STRING,
    },
    bot_id: {
        allowNull: true,
        type: sequelize.STRING,
    },
    client_secret: {
        allowNull: true,
        type: sequelize.STRING,
    },
    status: {
        type: sequelize.BOOLEAN,
        default: false,
    },
    website: {
        type: sequelize.STRING,
        allowNull: true,
    },
    company_registration: {
        type: sequelize.STRING,
        allowNull: false,
    },
    address_proof: {
        type: sequelize.STRING,
        allowNull: false,
    },
    senderId: {
        type: sequelize.INTEGER,
        allowNull: false,
    },
});

module.exports = RcsAgent;
