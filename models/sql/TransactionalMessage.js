const sequelize = require("sequelize");

const TransactionalMessage = sequelize.define("TransactionalMessages", {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    destination: sequelize.STRING,
    from: sequelize.STRING,
    body: sequelize.STRING,
    deliverytime: sequelize.DATE,
    readtime: sequelize.DATE,
    type: sequelize.STRING,
    message_id: {
        type: sequelize.STRING,
    },
    common_id: sequelize.STRING,
    callbackUrl: sequelize.STRING,
    status: {
        type: sequelize.STRING,
        defaultValue: "0",
    },
    userId: sequelize.INTEGER,
});

module.exports = TransactionalMessage;
