const fs = require("fs");
const mysql = require("mysql2/promise");
const { 
    source_database_config, 
    target_database_config,
    BATCH_SIZE, // Number of data to process in each batch
} = require("../config");

const Users = async () => {
    try {
        let offset = 0;

        // Load progress from the JSON file if it exists
        let progress = { offset: 0 };
        if (fs.existsSync('user.json')) {
            const progressData = fs.readFileSync('user.json', 'utf8');
            progress = JSON.parse(progressData);
            offset = progress.offset;
        }

        const source_connection = await mysql.createConnection(source_database_config);
        const target_connection = await mysql.createConnection(target_database_config);

        // We use transactions to ensure that either all users are inserted successfully or none of them are, maintaining data consistency
        await target_connection.query("START TRANSACTION");

        // Fetch the structure of the 'users' table from the source database
        const [sourceTableFields] = await source_connection.execute("SHOW COLUMNS FROM users");

        // Build the CREATE TABLE query for the target database based on the source table structure
        const createTableQuery = `CREATE TABLE IF NOT EXISTS users (${sourceTableFields.map(field => `${field.Field} ${field.Type}`).join(",")})`;
        await target_connection.execute(createTableQuery);

        let batches;

        do {
            try {
                // Fetch users from the source database
                batches = await source_connection.execute("SELECT * FROM users LIMIT ?, ?", [offset, BATCH_SIZE]);

                const insertions = batches.map(async (user) => {
                    try {
                        // Check if this user already exists in the target database
                        const [existingUser] = await target_connection.execute("SELECT * FROM users WHERE id = ?", [user.id]);
                        if(existingUser.length === 0){
                            // Any data normalization can take place here before insertion
                            await target_connection.execute(`INSERT INTO users SET ?`, user)
                        }
                    } catch (error) {
                        console.log(error);
                        // Throw the error to trigger the batch rollback
                        throw error;
                    }
                });

                await Promise.all(insertions);

                offset += BATCH_SIZE;

                // Save progress to the JSON file
                progress.offset = offset;
                fs.writeFileSync('user.json', JSON.stringify(progress));
            } catch (batchError) {
                // Rollback the current batch and resume from the last successful batch
                console.log('An error occurred in the current batch. Rolling back...');
                await target_connection.query("ROLLBACK");
                // Exit the loop and resume from the last successful batch
                break;
            }
        } while(batches.length > 0)

        await target_connection.query("COMMIT");

        // close connection
        source_connection.end();
        target_connection.end();

        // Delete the progress file after successful completion
        fs.unlinkSync('user.json');
    } catch (error) {
        console.log(error);
    }
}

module.exports = Users