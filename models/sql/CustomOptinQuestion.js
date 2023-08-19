const sequelize = require("sequelize");

const Customoptinquestion = sequelize.define(
    "customoptinquestion",
    {
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: sequelize.INTEGER,
        type: sequelize.STRING,
        title: sequelize.STRING,
        option1: sequelize.STRING,
        option2: sequelize.STRING,
        option3: sequelize.STRING,
        option4: sequelize.STRING,
        option5: sequelize.STRING,
        polartype: sequelize.STRING,
    },
    {}
);


module.exports = Customoptinquestion;
