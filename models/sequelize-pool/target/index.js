const { Sequelize } = require("sequelize")
const { target_database_config } = require("../../../config")


const options = {
    ...target_database_config,
    models: [],
    pool: {
        max: 5,
        min: 0,
        acquire: 60000,
        idle: 20000,
    },
    logging: false,
};

const targetPool = new Sequelize(options);

module.exports = targetPool;