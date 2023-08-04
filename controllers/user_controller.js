const User = require('../models/user');


module.exports.signup = (req, res) => {
    if(req.isAuthenticated()) {
        return res.redirect('/');
    }
    return res.render('sign_up');
}


module.exports.signin = (req, res) => {
    if(req.isAuthenticated()) {
        return res.redirect('/');
    }
    return res.render('sign_in');
}

module.exports.profile = async (req, res) => {

    const user = await User.findById(req.params.id);
    return res.render('user_profile', {profile_users:user});
    
    return res.redirect('/users/sign-in');
}


module.exports.create = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        return res.redirect('/users/sign-in');
    } else {
        return res.redirect('back');
    }
}


module.exports.createSession = (req, res) => {
    return res.redirect('/');
}


module.exports.destroySession = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        return res.redirect('/');
    });

}





