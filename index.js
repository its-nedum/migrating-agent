const { 
    Users, 
    Campaigns 
} = require("./tables");

async function migrate(){
    try {
        // Call migrations script for each table here
        await Users();
        await Campaigns();
    } catch (error) {
      console.error(error)  
    }
}

migrate();
