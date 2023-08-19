const sequelize = require("sequelize");
/**
 * This model is intended to hold all Tracksend charges for customer
 * starting with predefined_template automation charge
 * any other charges or fee can be add as an enum values for name
 */

const Charge = sequelize.define("charge", {
    name: {
        allowNull: false,
        type: sequelize.ENUM,
        values: ["predefined_template"],
    },
    amount: {
        allowNull: false,
        type: sequelize.INTEGER,
    },
});

module.exports = Charge;
