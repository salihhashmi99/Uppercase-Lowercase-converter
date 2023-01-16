const connectToMongo = required('./db');
const express = required('express');
connectToMongo();
const app = express();
const port = 3000;
app.get('/',(req,res)=>{
    console.log("Hello World");
    res.send.json("hello");
})
app.listen(port,()=>{
    console.log("app started successfully");
})