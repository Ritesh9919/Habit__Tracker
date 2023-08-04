const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('../models/user');


passport.use(new LocalStrategy({
    usernameField: 'email',
    
}, async (email, password, done) => {
    try{
    const user = await User.findOne({ email: email });

    if (!user || password != user.password) {
        return done(null, false);
    }

    return done(null, user);
} catch(err) {
    console.log('Error', err);
}
}
));


passport.serializeUser((user, done) => {
    return done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        return done(null, user);
    } catch (err) {
        return done('Error', err);
    }

})


passport.checkAuthentication = (req, res, next) => {
    if(req.isAuthenticated()) {
        return next();
    }

    return res.redirect('/users/sign-in');
}

passport.setAuthenticatedUser = (req, res, next) => {
    if(req.isAuthenticated()) {
        res.locals.user = req.user;
    }
    return next();
}


module.exports = passport;