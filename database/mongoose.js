const mongoose = require("mongoose")
mongoose.set('strictQuery', true);
require("dotenv").config({path: '../.env'});
const myUrL = process.env.Database


function database() {
    mongoose.connect("mongodb+srv://mosesnjoku:<sudxuc-wiqre4-mEjtop>Mosesnj.51rseyy.mongodb.net/?retryWrites=true&w=majority", { 
    dbName: "hotel-management",
    useNewUrlParser: true, 
    useUnifiedTopology: true 
}, (err) => {
    if (!err) {
        console.log("Success")
    } else {
        console.log("Error")
    }
})
}

module.exports = database;