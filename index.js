const express = require('express');
const emailRoute = require('./routes/email.js');
const weatherRoute = require('./routes/weather.js');
const bodyParser = require('body-parser') 
const app = express()
const cors = require('cors'); 

//app.use(cors())

app.use(express.json())

const port = process.env.PORT || 5000; 
app.use('/email', emailRoute)
app.use('/weather', weatherRoute)

app.get('/express_backend',(req, res)=>{
    res.send({express: 'Connected to React'})
})
app.listen(port, ()=> console.log(`Listening at ${port}`));