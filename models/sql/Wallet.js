const sequelize = require("sequelize");

const Wallet = sequelize.define("wallet", {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: sequelize.INTEGER,
    paymentId: sequelize.INTEGER,
    amount: sequelize.DOUBLE,
});

module.exports = Wallet;
