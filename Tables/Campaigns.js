const mysql = require("mysql2/promise");
const { source_database_config, target_database_config} = require("../config")

const Campaigns = async () => {
    try {
        const source_connection = await mysql.createConnection(source_database_config);
        const target_connection = await mysql.createConnection(target_database_config);

        const [sourceTableFields] = await source_connection.execute("SHOW COLUMNS FROM campaigns");

        const createTableQuery = `CREATE TABLE IF NOT EXISTS campaigns (${sourceTableFields.map(field => `${field.Field} ${field.Type}`).join(",")})`;
        await target_connection.execute(createTableQuery);

        const campaigns = await source_connection.execute("SELECT * FROM campaigns");

        for (const campaign of campaigns){
            // Any data normalization can take place here
            try {
                await target_connection.execute(`INSERT INTO users SET ?`, campaign)
            } catch (error) {
                console.log(error);
                continue;
            }
        }
        // close connection
        source_connection.end();
        target_connection.end();
    } catch (error) {
        console.log(error);
    }
}

module.exports = Campaigns