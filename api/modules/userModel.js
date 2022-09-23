const mongoose = require('mongoose');

const userScheme = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    phone: String,
    password: String,
    userType:String,



})
// const productScheme = new mongoose.Schema({
//     _id : mongoose.Schema.Types.ObjectId,
//     productName:String,
//     productDis:String,
//     price:Number,
//     productImage:File,


// })


module.exports = mongoose.model('User', userScheme);
// module.exports = mongoose.model('Product', productScheme);

