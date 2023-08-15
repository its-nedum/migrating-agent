const mysql = require("mysql2/promise");
const { source_database_config, target_database_config} = require("../config")

const Users = async () => {
    try {
        const source_connection = await mysql.createConnection(source_database_config);
        const target_connection = await mysql.createConnection(target_database_config);

        // Fetch the structure of the 'users' table from the source database
        const [sourceTableFields] = await source_connection.execute("SHOW COLUMNS FROM users");

        // Build the CREATE TABLE query for the target database based on the source table structure
        const createTableQuery = `CREATE TABLE IF NOT EXISTS users (${sourceTableFields.map(field => `${field.Field} ${field.Type}`).join(",")})`;
        await target_connection.execute(createTableQuery);

        // Fetch all users from the source database
        const users = await source_connection.execute("SELECT * FROM users");

        for (const user of users){
            // Any data normalization can take place here
            try {
                await target_connection.execute(`INSERT INTO users SET ?`, user)
            } catch (error) {
                console.log(error);
                continue;
            }
        }

        // close connection
        source_connection.end();
        target_connection.end();
    } catch (error) {
        console.log(error)
    }
}

module.exports = Users