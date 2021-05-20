const passport = require("passport");


//import All the Strategies------------------------------
const SignUpStrategy = require("./SignUpStrategy");
const SignInStrategy = require("./SignInStrategy");
//----------------------------------------------------

//TELL PASSPORT TO USE THE STRATEGIES-----------------
passport.use("local-signup", SignUpStrategy);
passport.use("local-signin", SignInStrategy);
//----------------------------------------------------


module.exports = passport;