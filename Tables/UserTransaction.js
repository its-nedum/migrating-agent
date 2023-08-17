const fs = require("fs");
const mysql = require("mysql2/promise");
const { 
    source_database_config, 
    target_database_config,
    BATCH_SIZE, // Number of data to process in each batch
} = require("../config");

const UserTransaction = async () => {
    
    try {
        let offset = 0;

        // Load progress from the JSON file if it exists
        let progress = { offset: 0 };
        if (fs.existsSync('user_tranx.json')) {
            const progressData = fs.readFileSync('user_tranx.json', 'utf8');
            progress = JSON.parse(progressData);
            offset = progress.offset;
        }

        const source_connection = await mysql.createConnection(source_database_config);
        const target_connection = await mysql.createConnection(target_database_config);
        console.log("Source and Target database connected!")

        // We use transactions to ensure that either all user_transaction are inserted successfully or none of them are, maintaining data consistency
        await target_connection.query("START TRANSACTION");
        console.log("Trasaction Started!")

        // Fetch the structure of the 'user_transaction' table from the source database
        const [sourceTableFields] = await source_connection.execute("SHOW COLUMNS FROM user_transaction");
        console.log("Table columns fetched!")

        // Build the CREATE TABLE query for the target database based on the source table structure
        const createTableQuery = `CREATE TABLE IF NOT EXISTS user_transaction (${sourceTableFields.map(field => `${field.Field} ${field.Type}`).join(",")})`;
        await target_connection.execute(createTableQuery);
        console.log("Table created in target database!")

        let batches = []; 
       
        do {
            try {
                // Fetch user_transaction from the source database
                batches = await source_connection.execute("SELECT * FROM user_transaction LIMIT ?, ?", [offset, BATCH_SIZE]);
                console.log("Fetched user_tranx data with offset and batch size");

                // Check if there's no more data to fetch
                if (batches[0].length === 0) {
                    console.log("No more data to exiting...")
                    break; // Exit the loop if there's no more data
                }
                
                const insertions = batches[0].map(async (user_tranx) => {
                    try {
                        // Check if this user_tranx already exists in the target database
                        const [existingUser] = await target_connection.execute("SELECT * FROM user_transaction WHERE id = ?", [user_tranx.id]);
                        console.log("Checked for existing user_tranx!")
                        
                        if(existingUser.length === 0){
                            // Any data normalization can take place here before insertion
                            const columns = Object.keys(user_tranx).join(', ');
                            const values = Object.values(user_tranx).map(val => target_connection.escape(val)).join(', ');
                            const insert_query = `INSERT INTO user_transaction (${columns}) VALUES (${values})`;
                            await target_connection.query(insert_query);
                            console.log(`Migration succeeded!`)
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
                fs.writeFileSync('user_tranx.json', JSON.stringify(progress));
            } catch (batchError) {
                // Rollback the current batch and resume from the last successful batch
                console.log('An error occurred in the current batch. Rolling back...');
                await target_connection.query("ROLLBACK");
                // Exit the loop and resume from the last successful batch
                break;
            }
        } while(true)
        
        await target_connection.query("COMMIT");

        // close connection
        source_connection.end();
        target_connection.end();

        // Delete the progress file after successful completion
        fs.unlinkSync('user_tranx.json');
    } catch (error) {
        console.log(error);
    }
}

module.exports = UserTransaction