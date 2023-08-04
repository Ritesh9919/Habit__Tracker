const mongoose = require('mongoose');


const habitSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    weeklyTrack:[Boolean]
    

   



    
}, {timestamps:true});


const Habit = mongoose.model('Habit', habitSchema);
module.exports = Habit;