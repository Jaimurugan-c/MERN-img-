const express = require('express');
const dotenv = require('dotenv');
const app = express();
dotenv.config();
app.get('/products', (req, res) => {

    res.send("Hello from products");
 
    
})
console.log(process.env.MONGO_URI);
app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})
