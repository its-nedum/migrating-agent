const sequelize = require("sequelize");

const Shortlink = sequelize.define("shortlinks", {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    shorturl: {
        type: sequelize.STRING.BINARY,
        unique: "shortlink_shorturl",
    },
    url: sequelize.STRING,
    // userId: sequelize.INTEGER,
    clickcount: sequelize.INTEGER,
    status: sequelize.INTEGER,
});


module.exports = Shortlink;
