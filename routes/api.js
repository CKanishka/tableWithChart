const express = require('express');
const router = express.Router();
const fs = require('fs')
let data = JSON.parse(fs.readFileSync('response.json', 'utf-8'))

router.get('/getdata',(req,res)=>{
    res.status(200).json({data}) 
})
router.get('*', function(req, res) {
    res.sendFile(`${__dirname}/build/index.html`);
})
module.exports=router;