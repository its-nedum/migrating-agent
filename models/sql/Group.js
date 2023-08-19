const sequelize = require("sequelize");

const Group = sequelize.define("group", {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize.STRING,
        unique: "group_user_composite",
    },
    userId: {
        type: sequelize.INTEGER,
        unique: "group_user_composite",
    },
    description: sequelize.STRING,
    platformtypeId: sequelize.INTEGER,
    count: sequelize.INTEGER,
    can_optin: sequelize.BOOLEAN,
});

module.exports = Group;
