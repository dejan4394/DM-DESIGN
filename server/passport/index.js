const passport = require("passport");
const User = require("./models/user")
const SignUpStrategy = require("./SignUpStrategy");
const SignInStrategy = require("./SignInStrategy");


//SERIALIZE-------------------------------------------
passport.serializeUser(function(user, done) {
    done(null, user.email);
  });
//-----------------------------------------------------

//DESERIALIZE------------------------------------------
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});
//-----------------------------------------------------


//TELL PASSPORT TO USE THE STRATEGIES-----------------
passport.use("local-signup", SignUpStrategy);
passport.use("local-signin", SignInStrategy);
//----------------------------------------------------


module.exports = passport;