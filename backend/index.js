import express from 'express';
import dotenv from 'dotenv';

import { connectDB } from './config/db.js';
const app = express();
dotenv.config();
app.get('/products', (req, res) => {

    res.send("Hello from products");
    connectDB()
    
})
console.log(process.env.MONGO_URI);
app.listen(5000,()=>{
    
    console.log("Server is running on port 5000");
})
