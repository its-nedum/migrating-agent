const sequelize = require("sequelize");

const Customcontactresponse = sequelize.define("customcontactresponse", {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    contactId: sequelize.STRING,
    customoptinquestionId: sequelize.INTEGER,
    response: sequelize.STRING,
});

module.exports = Customcontactresponse;
