const mongoose = require("mongoose");
const Connection = () => {
    mongoose
        .connect(
            process.env.DB_CONNECTION.replace("<password>", process.env.DB_PASSWORD)
        )
        .then(() => {
            console.log(" Mongo DB Connected!");
        })

};
module.exports = Connection;