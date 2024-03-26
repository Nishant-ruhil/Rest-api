require('dotenv').config();
const connectDB = require('./db/connect');
const Product = require('./models/product');
const productJson = require('./products.json');

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        console.log("Database connected successfully");
        console.log(productJson)
        await Product.create(productJson); 
        console.log("Data imported successfully");
    } catch (error) {
        console.error("Error:", error);
    }
}

start();
