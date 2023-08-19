const sequelize = require("sequelize");

const RolePermission = sequelize.define(
    "role_permission",
    {
        roleId: {
            type: sequelize.INTEGER,
        },
        permissionId: {
            type: sequelize.INTEGER,
        },
    },
    {
        timestamps: false,
    }
);

module.exports = RolePermission;
