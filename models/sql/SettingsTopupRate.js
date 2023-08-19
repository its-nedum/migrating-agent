const sequelize = require("sequelize");

const Settingstopuprate = sequelize.define("settingstopuprate", {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    amount: sequelize.DOUBLE,
    lowerlimit: sequelize.DOUBLE,
    upperlimit: sequelize.DOUBLE,
});

module.exports = Settingstopuprate;
