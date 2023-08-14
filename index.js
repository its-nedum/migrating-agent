const mysql = require("mysql2/promise");

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

async function main() {
    try {
        // create a connection to both database
        const source_connection = await mysql.createConnection(source_database_config);
        const target_connection = await mysql.createConnection(target_database_config);

        // fetch all tables from the source database
        const [tableRows] = await source_connection.execute("SHOW TABLES");
        const tables = tableRows.map(row => row[`Tables_in_${source_database_config.database}`]);

        // copy each table and its data
        for (const table of tables) {
            try {
                const [columns] = await source_connection.execute(`SHOW COLUMNS FROM ${table}`);
                const columnNames = columns.map(column => column.Field);

                const [rows] = await source_connection.execute(`SELECT * FROM ${table}`);

                for (const row of rows) {
                    try {
                        const insertData = columnNames.reduce((dataObj, column) => {
                            dataObj[column] = row[column];
                            return dataObj;
                            }, {});
                            
                            await target_connection.execute(`INSERT INTO ${table} SET ?`, insertData);
                    } catch (error) {
                        console.log(`An error occured on row: ${row} in table: ${table}`);
                        continue;
                    }
                }
            } catch (error) {
                console.log(`An error occured on table: ${table}`);
                continue;
            }

            console.log(`Copied ${rows.length} rows from ${table}`);
        }

        console.log('Tables and data copied successfully.');

        // close connection
        source_connection.end();
        target_connection.end();
    } catch (error) {
        console.error('An error occured:', error);
    }
}

main();