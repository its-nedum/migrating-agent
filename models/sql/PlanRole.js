const sequelize = require("sequelize");

const PlanRole = sequelize.define(
    "plan_role",
    {
        planId: {
            type: sequelize.INTEGER,
        },
        roleId: {
            type: sequelize.INTEGER,
        },
    },
    {
        timestamps: false,
    }
);

module.exports = PlanRole;
