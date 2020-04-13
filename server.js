const express=require('express');
const bodyParser=require('body-parser');
const cors = require('cors');

const app=express(); //initializing express

const routes=require('./routes/api')   //importing the route file

app.use(cors());
//applying middleware bodyparser
app.use(bodyParser.json());

app.use(express.static('client/build'));
app.get("*", (req, res) => {
    let url = path.join(__dirname, '../client/build', 'index.html');
    if (!url.startsWith('/app/')) // since we're on local windows
      url = url.substring(1);
    res.sendFile(url);
  });
//using route
app.use('/',routes); 

const port = process.env.PORT || 5000;

app.listen(port,()=>console.log(`Server running on port: ${port}`))