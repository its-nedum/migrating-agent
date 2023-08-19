const sequelize = require("sequelize");

const Settingsnetwork = sequelize.define("settingsnetwork", {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: sequelize.STRING,
    prefix: sequelize.STRING,
    countryId: sequelize.INTEGER,
    cost: sequelize.DOUBLE,
    type: sequelize.STRING, // sms || rcs
});


module.exports = Settingsnetwork;
