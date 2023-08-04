const User = require('../models/user');
const Habit = require('../models/habit');

module.exports.home = async(req, res) => {
  const habit = await Habit.find({});
  const user = await User.find({});
    return res.render('home', {
      users:user,
      habits:habit
    }
    );
}


module.exports.homePage = (req, res) => {
  return res.redirect('/');
}