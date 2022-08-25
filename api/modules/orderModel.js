const mongoose = require('mongoose');

const orderScheme = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    width: Number,
    widthin:Number,
    height: Number,
    heightin:Number,
    shopName: String,
    shopaddress:String,
    shopLocation:String

})


module.exports = mongoose.model('Order', orderScheme);
