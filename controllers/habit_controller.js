const Habit = require('../models/habit');


module.exports.create = async (req, res) => {
    const newHabit = await new Habit({
      content:req.body.content,
      weeklyTrack:new Array(7).fill(false)
    })
     await newHabit.save();
    return res.redirect('/');
}


module.exports.destroy = async(req, res) => {
  const habit = await Habit.findByIdAndDelete(req.params.id);
  return res.redirect('back');
}

module.exports.edits = async (req, res) => {
  const habits = await Habit.find({});
  return res.render('habit_edit', {habits:habits});
}

module.exports.edit = async (req, res) => {
  const {id} = req.params;
   const habit = await Habit.findByIdAndUpdate(id, req.body);
   return res.redirect('/');
}


module.exports.weekly = async (req, res) => {
    const habits = await Habit.find({});
    return res.render('weekly_track', {habits:habits});
}


module.exports.toggle = async (req, res) => {
  try{
   const {id} = req.params;
   const habit = await Habit.findById(id);
   const today = new Date().getDay();
   habit.weeklyTrack[today] = !habit.weeklyTrack[today];
   await habit.save();
   return res.redirect('/habits/weekly'); 
  }catch(err) {
    console.log('Error***', err);
  }
}

