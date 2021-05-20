const express = require('express');
const router = express.Router();
const passport = require("../passport");


router.post('/signup', (req,res)=>{

  //CUSTOM CALLBACK FUNCTION
passport.authenticate("local-signup", function(err, user, info){

  if(err){return res.status(500).json({
    message: "Oops something hapenned",
    err: err.message || "inter server error"
  })
}

return res.json(user)

})(req, res);

});



router.post('/signin', (req,res, next)=>{

  //CUSTOM CALLBACK FUNCTION
passport.authenticate("local-signin", function(err, user, info){

  if(err){
    return res.status(500).json({
    message: err,
  });
}

return res.json(user);

})(req, res, next);

});

module.exports = router;
