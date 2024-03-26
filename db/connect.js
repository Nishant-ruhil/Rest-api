const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');

// we SET THIS INTO THE ENV FILE 
// uri = "mongodb+srv://nishant:Nishant@#2213@products.eomnyoa.mongodb.net/products?retryWrites=true&w=majority&appName=products"

const connectDB =(uri)=>{
    return mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB;