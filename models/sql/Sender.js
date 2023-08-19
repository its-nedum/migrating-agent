const sequelize = require("sequelize");

const Sender = sequelize.define(
    "sender",
    {
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: sequelize.STRING,
            unique: "sender_user_composite",
        },
        callbackUrl: {
            type: sequelize.STRING,
        },
        userId: {
            type: sequelize.INTEGER,
            unique: "sender_user_composite",
        },
        description: sequelize.STRING,
        status: sequelize.INTEGER,
    },
    {
        tableName: "senders",
    }
);

module.exports = Sender;
