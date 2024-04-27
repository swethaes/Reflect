const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    ChildName: {type: String, required: true},
    ChildAge: {type: Number, required: true},
    ChildGender: {type: String, required: true},
    ParentName: {type:String, required: true},
    email: {type: String, required: true},
    phnumber: {type: Number, required: true},
    password: {type: String, required: true},
});


const User = mongoose.model("user", userSchema);


module.exports = {User};
