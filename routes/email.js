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
function sendEmail(resp){
    const url = new URL('http://xdroid.net/api/message')
    const k =('k-b6553520859a')
    const c = ('subject'+ resp.Subject+" body:"+ resp.Body)
    url.searchParams.append("k",k)
    url.searchParams.append("c",c)
    fetch(url)
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