const express = require('express');
const router = express.Router();
const sranje = require("../models/SignUpModels")


router.post('/signup', (req, res)=>{
    const newUser = new sranje({
        fullName : req.body.fullName,
        userName : req.body.userName,
        email : req.body.email,
        password : req.body.password
    })
    newUser.save()
    .then(data=>{
        res.json(data)
    })
    .catch(error=>{
        res.json(error)
    })
});



module.exports = router;