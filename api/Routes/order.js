const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Order = require('../modules/orderModel');



router.post('/',(req, res, next)=>{
    const order = new Order({
        _id:new mongoose.Types.ObjectId,
        width: req.body.width,
        widthin:req.body.widthin,
        height: req.body.height,
        heightin:req.body.heightin,
        shopName:req.body.shopName,
       })
       user.save()
       .then(result=>{
        console.log(result);
        res.status(200).json({
            newOrder:result
        })
       })//Saving Order Data
       .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
    
})










module.exports = router;
