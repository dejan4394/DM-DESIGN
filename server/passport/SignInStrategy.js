const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require('bcryptjs');
const User = require("./models/user.js")


const SignInStrategy = new LocalStrategy({ usernameField: "email" },function( email, password, done ){

    User.findOne({ email }).lean().exec((err, user) => {
        if (err) {
            return done(err, null);
        }
        if (!user) {
            return done("user doesn't exist", null);
        }

        const isPasswordValid = bcrypt.compareSync( password, user.password);

        if (!isPasswordValid){
            return done("Email or Password incorrect!!!", null);
        }

    return done (null, user)
})
})



module.exports = SignInStrategy;