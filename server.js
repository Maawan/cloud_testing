const express = require('express')
const app = express();
app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/temp.html")
})
app.listen(process.env.PORT | 3001)