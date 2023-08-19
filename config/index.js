const dotenv = require("dotenv");

const VRE = require("@boxpositron/vre");

const validate = VRE.default;
const RequiredEnvironmentTypes = VRE.RequiredEnvironmentTypes;

dotenv.config();

const runtimeEnvironment = [
    {
        name: "SOURCE_HOST",
        type: RequiredEnvironmentTypes.String,
    },
    {
        name: "SOURCE_USER",
        type: RequiredEnvironmentTypes.String,
    },
    {
        name: "SOURCE_PASSWORD",
        type: RequiredEnvironmentTypes.String,
    },
    {
        name: "SOURCE_DATABASE",
        type: RequiredEnvironmentTypes.String,
    },
    {
        name: "SOURCE_DIALECT",
        type: RequiredEnvironmentTypes.String,
    },
    {
        name: "TARGET_HOST",
        type: RequiredEnvironmentTypes.String,
    },
    {
        name: "TARGET_USER",
        type: RequiredEnvironmentTypes.String,
    },
    {
        name: "TARGET_PASSWORD",
        type: RequiredEnvironmentTypes.String,
    },
    {
        name: "TARGET_DATABASE",
        type: RequiredEnvironmentTypes.String,
    },
    {
        name: "TARGET_DIALECT",
        type: RequiredEnvironmentTypes.String,
    },
]

validate(runtimeEnvironment);

const source_database_config = {
    host: process.env.SOURCE_HOST,
    port: parseInt(process.env.MYSQL_PORT),
    username: process.env.SOURCE_USER,
    password: process.env.SOURCE_PASSWORD,
    database: process.env.SOURCE_DATABASE,
    dialect: process.env.SOURCE_DIALECT,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
}

const target_database_config = {
    host: process.env.TARGET_HOST,
    port: parseInt(process.env.MYSQL_PORT),
    username: process.env.TARGET_USER,
    password: process.env.TARGET_PASSWORD,
    database: process.env.TARGET_DATABASE,
    dialect: process.env.TARGET_DIALECT,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
}

const BATCH_SIZE = 100;

module.exports = {
    source_database_config,
    target_database_config,
    BATCH_SIZE,
}