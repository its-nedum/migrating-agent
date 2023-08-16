const source_database_config = {
    host: 'source_host',
    user: 'source_user',
    password: 'source_password',
    database: 'source_database'
}

const target_database_config = {
    host: 'target_host',
    user: 'target_user',
    password: 'target_password',
    database: 'target_database'
}

const BATCH_SIZE = 100;

module.exports = {
    source_database_config,
    target_database_config,
    BATCH_SIZE,
}