const mongoose = require('mongoose');

const orderScheme = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    customerName: String,
    mobile: String,
    email: String,
    pickupAddress: String,
    dropoffAddress: String,
    pickupDate: String,
    pickupTime: String,
    carType: String,
})


module.exports = mongoose.model('Order', orderScheme);
