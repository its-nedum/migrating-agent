const sequelize = require("sequelize");

const UserInvitation = sequelize.define("userinvitations", {
    userId: sequelize.INTEGER,
    email: {
        type: sequelize.STRING,
        allowNull: false,
        unique: "unique_user_email",
        validate: {
            isEmail: true,
        },
    },
    status: {
        type: sequelize.STRING, // PENDING || JOINED
        allowNull: false,
        defaultValue: "pending", // pending, joined, removed
    },
    role: {
        type: sequelize.STRING,
        allowNull: false,
    },
    uniqueToken: {
        type: sequelize.STRING,
        allowNull: false,
    },
    dateJoined: {
        type: sequelize.DATE,
        allowNull: true,
    },
});

module.exports = UserInvitation;
