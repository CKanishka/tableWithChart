const express=require('express');
const bodyParser=require('body-parser');
const cors = require('cors');
const path = require('path');
const app=express(); //initializing express

const routes=require('./routes/api')   //importing the route file

app.use(cors());
//applying middleware bodyparser
app.use(bodyParser.json());

app.use(express.static('client/build'));

//using route
app.use('/',routes); 

const port = process.env.PORT || 5000;

app.listen(port,()=>console.log(`Server running on port: ${port}`))