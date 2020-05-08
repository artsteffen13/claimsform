const express = require('express');
const mongoose = require('mongoose');
const keys = require('./keys/keys');
const passport = require('passport');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');
const sslRedirect = require('heroku-ssl-redirect');

require('./passport/localStrategy');

const app = express();

const sess = {
    secret: keys.secret,
    cookie: {},
    resave: false,
    saveUninitialized: false,
    maxAge: 60 * 60 * 24,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
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
app.use(flash());
app.use(sslRedirect());

// const firstTest = new ClaimInfo({
//     name: 'Art,',
//     address: '5 Cherry Blossom',
//     number: 5426482458,
//     email: 'wefe@fewn.com',
// });

mongoose.connect(keys.mongoDbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

require('./routes/claims')(app);
require('./routes/authenticate')(app);

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
