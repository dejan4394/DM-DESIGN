const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require('bcryptjs');
const User = require("./models/user.js")


const SignInStrategy = new LocalStrategy({ usernameField: "email" },function( email, password, done ){

    //--Match the  User----
    User.findOne({ email }).lean().exec((err, user) => {
        if (err) {
            return done(err, null);
        }
        if (!user) {
            return done("User doesn't exist!!!", null);
        }

        //--Match the Password------
        const isPasswordValid = bcrypt.compareSync( password, user.password);

        if (!isPasswordValid){
            return done("Email or Password incorrect!!!", null);
        }

    return done (null, user)
})
})



module.exports = SignInStrategy;