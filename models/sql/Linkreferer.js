const sequelize = require("sequelize");

const Linkreferer = sequelize.define("linkreferer", {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    shortlinkId: {
        type: sequelize.INTEGER,
    },
    referer: sequelize.STRING,
    medium: sequelize.STRING,
    contactLink: sequelize.STRING,
    clicker_ip: sequelize.STRING,
    clicker_device: sequelize.STRING,
});

module.exports = Linkreferer;
