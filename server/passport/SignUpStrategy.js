const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require('bcryptjs');
const User = require("./models/user.js")

var salt = bcrypt.genSaltSync(10);


const SignUpStrategy = new LocalStrategy({ passReqToCallback: true, usernameField: "email" },function(req, email, password, done){

    User.findOne({ email }).lean().exec((err, user) => {
        if (err) {
            return done(err, null);
        }
        if (user) {
            return done("user already exist", null);
        }

        const ecrypted_password = bcrypt.hashSync(password, salt);
        const newUser = new User({
            fullName: req.body.fullName,
            username: req.body.username,
            email,
            password: ecrypted_password
        });

        newUser.save((error, inserted) => {
            if (error) {
                return done(error, null);
            }

            return done(null, inserted);
        });
    });

    
})




module.exports = SignUpStrategy;
