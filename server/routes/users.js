const express = require('express');
const router = express.Router();
const passport = require("../passport");


router.post('/signup', (req,res)=>{

  //CUSTOM CALLBACK FUNCTION
passport.authenticate("local-signup", function(err, user, info){

  if(err){
    return res.status(500).json({
    message: "Oops something hapenned",
    err: err.message || "inter server error"
  })
}

//----PERSISTENT LOGIN----------
req.logIn(user, (err) =>{
  if(err){
    return res.status(500).json({
      message: err,
    });
  }
  return res.json({
    message:"Uspesno se registriravte!!!",
  });
})

})(req, res);

});



router.post('/signin', (req,res, next)=>{

  //CUSTOM CALLBACK FUNCTION
passport.authenticate("local-signin", function(err, user, next){

  if(err){
    return res.status(500).json({
    message: err
  });
}

//----PERSISTENT LOGIN----------
req.logIn(user, (err) =>{
  if(err){
    return res.status(500).json({
      message: err
    });
  }
  return res.json({
    message:"Uspesno se logiravte!!!"
  });
})


})(req, res, next);

});

module.exports = router;
