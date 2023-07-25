const User = require('../models/user');


module.exports.signup = (req, res) => {
    return res.render('sign_up');
}


module.exports.signin = (req, res) => {
    return res.render('sign_in');
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
    
}