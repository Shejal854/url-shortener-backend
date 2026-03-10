const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("MongoDB Connected");
    } catch (error) {
        console.error("Mongo Connection Error", error);
        process.exit(1);
        
    }
    
};

module.exports = connectDB;

