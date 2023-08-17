const fs = require("fs");
const mysql = require("mysql2/promise");
const { 
    source_database_config, 
    target_database_config,
    BATCH_SIZE, // Number of data to process in each batch
} = require("../config");

const Drafts = async () => {
    
    try {
        let offset = 0;

        // Load progress from the JSON file if it exists
        let progress = { offset: 0 };
        if (fs.existsSync('draft.json')) {
            const progressData = fs.readFileSync('draft.json', 'utf8');
            progress = JSON.parse(progressData);
            offset = progress.offset;
        }

        const source_connection = await mysql.createConnection(source_database_config);
        const target_connection = await mysql.createConnection(target_database_config);
        console.log("Source and Target database connected!")

        // We use transactions to ensure that either all drafts are inserted successfully or none of them are, maintaining data consistency
        await target_connection.query("START TRANSACTION");
        console.log("Trasaction Started!")

        // Fetch the structure of the 'drafts' table from the source database
        const [sourceTableFields] = await source_connection.execute("SHOW COLUMNS FROM drafts");
        console.log("Table columns fetched!")

        // Build the CREATE TABLE query for the target database based on the source table structure
        const createTableQuery = `CREATE TABLE IF NOT EXISTS drafts (${sourceTableFields.map(field => `${field.Field} ${field.Type}`).join(",")})`;
        await target_connection.execute(createTableQuery);
        console.log("Table created in target database!")

        let batches = []; 
       
        do {
            try {
                // Fetch drafts from the source database
                batches = await source_connection.execute("SELECT * FROM drafts LIMIT ?, ?", [offset, BATCH_SIZE]);
                console.log("Fetched draft data with offset and batch size");

                // Check if there's no more data to fetch
                if (batches[0].length === 0) {
                    console.log("No more data to exiting...")
                    break; // Exit the loop if there's no more data
                }
                
                const insertions = batches[0].map(async (draft) => {
                    try {
                        // Check if this draft already exists in the target database
                        const [existingUser] = await target_connection.execute("SELECT * FROM drafts WHERE id = ?", [draft.id]);
                        console.log("Checked for existing draft!")
                        
                        if(existingUser.length === 0){
                            // Any data normalization can take place here before insertion
                            const columns = Object.keys(draft).join(', ');
                            const values = Object.values(draft).map(val => target_connection.escape(val)).join(', ');
                            const insert_query = `INSERT INTO drafts (${columns}) VALUES (${values})`;
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
                fs.writeFileSync('draft.json', JSON.stringify(progress));
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
        fs.unlinkSync('draft.json');
    } catch (error) {
        console.log(error);
    }
}

module.exports = Drafts