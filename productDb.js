require('dotenv').config();
const connectDB = require('./db/connect');
const Product1 = require('./models/products');
const productJson = require('./products.json');

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        console.log("Database connected successfully");
        // Increase timeout for the insert operation
        await Product1.create(productJson); // 30 seconds timeout
        
        console.log("Data imported successfully");
    } catch (error) {
        console.error("Error:", error);
    }
}

start();
