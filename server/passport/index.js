const passport = require("passport");
const User = require("./models/user")


passport.serializeUser(function(user, done) {
    done(null, user.email);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

//import All the Strategies------------------------------
const SignUpStrategy = require("./SignUpStrategy");
const SignInStrategy = require("./SignInStrategy");
//----------------------------------------------------

//TELL PASSPORT TO USE THE STRATEGIES-----------------
passport.use("local-signup", SignUpStrategy);
passport.use("local-signin", SignInStrategy);
//----------------------------------------------------


module.exports = passport;