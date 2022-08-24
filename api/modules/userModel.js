const mongoose = require('mongoose');

const userScheme = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    phone: String,
    password: String,
    userType:String,



})


module.exports = mongoose.model('User', userScheme);
