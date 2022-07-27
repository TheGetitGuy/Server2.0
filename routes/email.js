const express = require('express');
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended:true}));

router.post('/mailer', function(req, res){
    res.send(req.body)
    console.log(req.body.asdasd)
})

module.exports = router