const passport = require('passport');
const mongoose = require('mongoose');
const userSchema = require('../schemas/userSchema');
const User = mongoose.model('User', userSchema);
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = (app) => {
    app.get('/logout', function(req, res){
        req.logout();
        res.redirect('/');
    });

    app.post('/signup/newuser', (req, res) => {
        User.findOne({user: req.body.user}, function (err, user) {
            if (err) {
                res.send(alert('Something went wrong, please try again'))
            }
            if (user) {
                return res.redirect('/userexists');
            }
            if (!req.body.user || !req.body.password || !req.body.firstName || !req.body.lastName) {
                return res.redirect('/allfieldsrequired');
            }
            if (!user) {
                bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
                    const newUser = new User({
                        user: req.body.user,
                        password: hash,
                        firstName: req.body.firstName,
                        lastName: req.body.lastName
                    });
                    newUser.save();
                    res.redirect('/login');
                });
            }
        })
    })



    app.post('/login/authorize', passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/loginIncorrect'
    }));

    app.get('/userinfo', (req, res) => {
        if (!req.user) {
            return null
        } else {
            res.send({id: req.user.id, email: req.user.user, firstName: req.user.firstName, lastName: req.user.lastName});
        }
    });
}
