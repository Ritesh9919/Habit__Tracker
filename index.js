const express = require('express');
const path = require('path');
const db = require('./config/mongoose');
const passport = require('passport');
const passportLocal = require('./config/passport_local_strategy');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const port = process.env.PORT || 8000;

const app = express();

app.use(express.urlencoded());
app.use(express.static('static'));

// setting view engine
app.set('view engine', 'ejs');


app.use(session({
    name:'habittracker',
    secret:'blahsomething',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000 * 60 * 100)
    },
    store:MongoStore.create({
        mongoUrl:'mongodb://127.0.0.1:27017/Habit-Tracker',
        autoRemove:'disabled'
    })
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

app.use('/', require('./routes'));
app.listen(port, () => {
    console.log(`Server is running on port:${port}.`);
})