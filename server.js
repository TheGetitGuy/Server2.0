const express = require('express');
const emailRoute = require('./routes/email.js');
const bodyParser = require('body-parser') 
const app = express()



const port = process.env.PORT || 5000; 
app.use('/email', emailRoute)

app.get('/express_backend',(req, res)=>{
    res.send({express: 'Connected to React'})
})

app.listen(port,()=> console.log(`Listening at ${port}`));