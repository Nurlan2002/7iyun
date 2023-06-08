const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

const connectDB = require("./helper/connection")


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

//  Mongo Db Connection
connectDB();


PORT = process.env.PORT;
app.listen(8080, () => {
    console.log(`Node App listening on port ${8080}`);
}); 