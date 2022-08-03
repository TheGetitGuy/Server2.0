const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer')

router.use(express.json());
router.use(express.urlencoded({extended:true}));

const createTransporter = async () => {
    
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth:{
            type:"OAuth2",
            user: process.env.USERVAR,
            pass: process.env.USERPASS,
            clientId: process.env.OAUTH_CLIENTID,
            clientSecret:process.env.OAUTH_CLIENT_SECRET,
            refreshToken: process.env.OAUTH_REFRESH_TOKEN
            },
        });
return transporter
}
const sendEmail = async (emailOptions) => {
    let emailTransporter = await createTransporter();
    await emailTransporter.sendMail(emailOptions)
}


router.post('/mailer', function(req, res){
    res.send('sick Email')
    console.log(req.body.Email)
    handleEmail(req.body)
})
router.get('/mailer', function(req, res){
    res.send('this should be a post')
})
module.exports = router


function handleEmail(response){
    sendEmail({
        subject:`msg from ${response.Email}`,
        text:`Subject-${response.Subject}:${response.Body}`,
        to:'thegetitguy@gmail.com'
    })

}