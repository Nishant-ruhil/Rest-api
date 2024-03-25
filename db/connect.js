const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');

// we SET THIS INTO THE ENV FILE 
// uri = "mongodb+srv://nishant:Nishant@#2213@products.eomnyoa.mongodb.net/products?retryWrites=true&w=majority&appName=products"

const connectDB =(uri)=>{
    console.log("gya h ya nahi");
    return new MongoClient(uri,{
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
          }
    });asdfsa
}

module.exports = connectDB;