const express = require("express");
const dotenv = require("dotenv");
const migrate = require("./main")
const sourcePool = require("./models/sequelize-pool/source");
const targetPool = require("./models/sequelize-pool/target")

dotenv.config();

const app = express();
const port = process.env.PORT ?? 9000;

async function conn(){
    console.log("Connecting to source database...");
    await sourcePool.authenticate();
    console.log("Connected to source database");

    console.log("Connecting to target database...");
    await targetPool.authenticate()
    console.log("Connected to target database")
}

app.get('/', (_req, res) => {
  res.send("Welcome to Migrating Agent");
});

app.listen(port, () => {
conn().catch((err) => console.log(err))
  console.log(`[server]: Migrating Server is running on ${port}`);
//   migrate()
});
