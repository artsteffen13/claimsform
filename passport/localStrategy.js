const passport = require('passport');
LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const userSchema = require('../schemas/userSchema')
const User = mongoose.model('User', userSchema);

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id)
        .then(existingUser => {
            done(null, existingUser);
        })
});

passport.use(new LocalStrategy(
    async function(username, password, done) {
        User.findOne({ user: username }, function(err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (user.password !== password) {
                return done(null, false, { message: 'Incorrect password.' });
            }return done(null, user);
        });
    }
));

