// first tarika bina routes or controller banaye

// const express = require("express");
// const app = express();
// const PORT = process.env.PORT || 5000;

// app.get("/",(req,res)=>{
//     res.send("Hi MY name is Nishant,I am the Developer of the rest api for ecommerce website.");
// })

// const start = async()=>{
// try{
//     app.listen(PORT, ()=>{
//         console.log(`${PORT} Yes i am Connected`);
//     });
// } catch(error){
//     console.log(error);

// }
// }
// start()


// Second tarika routes and controller ke sath 
require('dotenv').config();
const express = require('express');
const app = express();
const product_routes = require('./routes/products');
const PORT = process.env.PORT || 5000;


const connectDB = require('./db/connect');

app.use('/api/products', product_routes)

app.get("/",(req,res)=>{
        res.send("Hi MY name is Nishant,I am the Developer of the rest api for ecommerce website.");
    })

const start = async()=>{
try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT , ()=>{
        console.log("HEy I am connected");
    })
} catch (error) {
    console.log(error);
}
}
start()

