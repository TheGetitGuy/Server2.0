const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer')
const fetch = require('node-fetch')
router.use(express.json());
router.use(express.urlencoded({extended:true}));
const url = 'https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send';


router.post('/mailer', function(req, res){
    res.send('sick Email')
    console.log(req.body.Email)
    handleEmail(req.body)
})
router.get('/mailer', function(req, res){
    res.send('this should be a post')
})
function sendEmail(res){
    const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': process.env.SENDEMAILKEY,
          'X-RapidAPI-Host': 'rapidprod-sendgrid-v1.p.rapidapi.com'
        },
        body: `{"personalizations":[{"to":[{"email":"thegetitguy@gmail.com"}],"subject":"${res.Subject}"}],"from":{"email":"${res.Email}"},"content":[{"type":"text/plain","value":"${res.Body}"}]}`
      };
    fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));
}

function handleEmail(response){
    sendEmail({
        subject:`msg from ${response.Email}`,
        text:`Subject-${response.Subject}:${response.Body}`,
        to:'thegetitguy@gmail.com'
    })
    
}
module.exports = router