const express = require('express');
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended:true}));

router.post('/mailer', function(req, res){
    res.send('sick Email')
    console.log(req.body.Email)
})
router.get('/mailer', function(req, res){
    res.send('this should be a post')
})
module.exports = router