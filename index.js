const express = require('express');
const mongoose = require('mongoose');
const claimSchema = require('./schemas/claimSchema');
const keys = require('./keys/keys');
const passport = require('passport');
const bodyParser = require('body-parser');
const userSchema = require('./schemas/userSchema');
const session = require('express-session');

require('./passport/localStrategy');

const app = express();

const sess = {
    secret: keys.secret,
    cookie: {},
    resave: false,
    saveUninitialized: false,
    maxAge: 60 * 60 * 24
}

if (app.get('env') === 'production') {
    app.set('trust proxy', 1) // trust first proxy
    sess.cookie.secure = true // serve secure cookies
}

app.use(session(sess))

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(express.static("public"));

const ClaimInfo = mongoose.model('ClaimInfo', claimSchema);
const User = mongoose.model('User', userSchema);

// const firstTest = new ClaimInfo({
//     name: 'Art,',
//     address: '5 Cherry Blossom',
//     number: 5426482458,
//     email: 'wefe@fewn.com',
// });


// const newUser = new User({
//     user: 'art',
//     password: 'test1234'
// });


mongoose.connect(keys.mongoDbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.get('/userinfo', (req, res) => {
    res.send(req.user);
})

app.post('/login/authorize', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
}));

app.post('/claims/new', (req, res) => {
    console.log(req.user)
    try {
        const newClaim = new ClaimInfo({
            name: req.body.name,
            address: req.body.address,
            number: req.body.number,
            email: req.body.email,
            _user: req.user.id
        })
        newClaim.save();
        res.send('Success');
    } catch (error) {
        res.send(error.message);
    }
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('clientside/build'));

    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'clientside', 'build', 'index.html'))
    });
}

let port = process.env.PORT;
if (port == null || port == "") {
    port = 5000;
}
app.listen(port);
