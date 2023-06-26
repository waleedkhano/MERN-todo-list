const express = require('express');
const mongoose = require('mongoose')
const listRouter = require('./routes/route')

const app = express();

app.use(express.json())
app.use(('/api'), listRouter)


mongoose.connect("mongodb://localhost:27017")
.then(()=>{
    app.listen(5000, ()=>{
        console.log("DataBase and server is working")
    })

});