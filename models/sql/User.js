const sequelize = require("sequelize");

const User = sequelize.define(
    "user",
    {
        // The email cannot be null, and must be a proper email before creation
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        email: {
            type: sequelize.STRING,
            allowNull: false,
            unique: "unique_user_email",
            validate: {
                isEmail: true,
            },
        },
        google_userId: {
            type: sequelize.STRING,
            allowNull: true,
            defaultValue: null,
            unique: "google_userId",
        },
        // The password cannot be null
        password: {
            type: sequelize.STRING,
            allowNull: false,
        },
        api_key: {
            type: sequelize.STRING,
            allowNull: false,
            unique: "api_key",
        },
        platform: {
            type: sequelize.STRING,
            defaultValue: "smsapp",
        },
        defaultplatform: {
            type: sequelize.STRING,
            defaultValue: null,
        },
        role: {
            type: sequelize.STRING,
            defaultValue: "admin", // admin , watching, agent, maintain
        },
        plan: {
            type: sequelize.STRING,
            defaultValue: "free", // free , premium a, premium b, custom
        },
        adminId: {
            type: sequelize.INTEGER,
            allowNull: true,
            defaultValue: null,
        },
        paystack_customer_code: {
            type: sequelize.STRING,
            allowNull: true,
            defaultValue: null,
        },
        name: sequelize.STRING,
        phone: sequelize.STRING,
        business: sequelize.STRING,
        balance: sequelize.DOUBLE,
        token: sequelize.STRING,
        wa_active: sequelize.BOOLEAN,
        // Woocommerce Integration Status
        wc_active: sequelize.BOOLEAN,
        shopify_active: sequelize.BOOLEAN,
        wa_instanceid: sequelize.STRING,
        wa_instancetoken: sequelize.STRING,
        wa_instanceurl: sequelize.STRING,
        sms_service: {
            type: sequelize.STRING,
            defaultValue: "kirusa",
        },
        country: {
            type: sequelize.STRING,
            defaultValue: "Nigeria",
        },
        fastspring_customer_code: {
            type: sequelize.STRING,
            allowNull: true,
            defaultValue: null,
        },
        rcs_firsttime: {
            type: sequelize.BOOLEAN,
            defaultValue: true,
        },
        control_balance: {
            type: sequelize.DOUBLE,
            defaultValue: 0,
        },
    },
);

module.exports = User;
