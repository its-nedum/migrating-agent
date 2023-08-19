const sequelize = require("sequelize");

const Transaction = sequelize.define("transactionhistory", {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: sequelize.INTEGER,
    type: sequelize.STRING,
    description: sequelize.STRING,
    ref_id: sequelize.INTEGER,
    trxref: sequelize.STRING,
    status: sequelize.STRING,
    amount: sequelize.DOUBLE,
});

module.exports = Transaction;
