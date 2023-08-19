const sequelize = require("sequelize");

const Payment = sequelize.define("payment", {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: sequelize.INTEGER,
    },
    paymentref: sequelize.STRING,
    txid: sequelize.INTEGER,
    flwref: sequelize.STRING,
    name: sequelize.STRING,
    phone: sequelize.STRING,
    email: sequelize.STRING,
    amount: sequelize.DOUBLE,
    vat: sequelize.DOUBLE,
    currency: sequelize.STRING,
    channel: sequelize.STRING,
    isverified: sequelize.INTEGER,
});

module.exports = Payment;
