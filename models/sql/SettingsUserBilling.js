const sequelize = require("sequelize");

const Settingsuserbilling = sequelize.define("settingsuserbilling", {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: sequelize.INTEGER,
    settingsnetworkId: sequelize.INTEGER,
    cost: sequelize.DOUBLE,
    status: sequelize.BOOLEAN,
    type: sequelize.STRING, // sms || rcs
});


module.exports = Settingsuserbilling;
