const express = require('express');
const router = express.Router();
const sranje = require("../models/SignUpModels")
const gomno = require("../models/SignInModels")

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


router.post('/signin', (req, res)=>{
    const logedUser = new gomno({

        email : req.body.email,
        password : req.body.password
    })
    logedUser.save()
    .then(data=>{
        res.json(data)
    })
    .catch(error=>{
        res.json(error)
    })
});



module.exports = router;