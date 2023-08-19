const { Sequelize } = require("sequelize")
const { source_database_config } = require("../../../config")

const Admin = require("../../sql/Admin");

const models = [
    Admin,
];

const options = {
    ...source_database_config,
    models,
    pool: {
        max: 5,
        min: 0,
        acquire: 60000,
        idle: 20000,
    },
    logging: false,
};

const sourcePool = new Sequelize(options);

module.exports = sourcePool;