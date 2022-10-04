const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Order = require('../modules/orderModel');
const checkAuth = require('../middleware/check-auth');


router.get('/all',checkAuth,(req, res, next)=>{
    Order.find()
    .then(result=>{
        res.status(200).json({
        orderData:result
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})


router.get('/:id',(req, res, next)=>{
    console.log(req.params.id);
Order.findById(req.params.id)
.then(result=>{
    res.status(200).json({
        order:result
    });
})
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
})

router.post('/citytoairport',(req, res, next)=>{
    const order = new Order({
        _id:new mongoose.Types.ObjectId,
        customerName: req.body.customerName,
        mobile: req.body.mobile,
        email: req.body.email,
        pickupAddress: req.body.pickupAddress,
        dropoffAddress: req.body.dropoffAddress,
        pickupDate: req.body.pickupDate,
        pickupTime: req.body.pickupTime,
        carType: req.body.carType
       })
       order.save()
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

router.post('/airporttocity',(req, res, next)=>{
    const order = new Order({
        _id:new mongoose.Types.ObjectId,
        customerName: req.body.customerName,
        mobile: req.body.mobile,
        email: req.body.email,
        pickupAddress: req.body.pickupAddress,
        dropoffAddress: req.body.dropoffAddress,
        pickupDate: req.body.pickupDate,
        pickupTime: req.body.pickupTime,
        carType: req.body.carType
       })
       order.save()
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

//order delete
router.delete('/:id',(req, res, next)=>{
    Order.remove({_id:req.params.id})
    .then(result=>{
        console.log(result);
        res.status(200).json({
            result:result
        })
})
.catch(err=>{
    res.status(400).json({
        error:err
    })
})


})
router.put('/:id',(req, res, next)=>{
    console.log(req.params.id);
    Order.findOneAndUpdate({_id:req.params.id },{
        $set:{
            customerName: req.body.customerName,
            mobile: req.body.mobile,
            email: req.body.email,
            pickupAddress: req.body.pickupAddress,
            dropoffAddress: req.body.dropoffAddress,
            pickupDate: req.body.pickupDate,
            pickupTime: req.body.pickupTime,
            carType: req.body.carType

        }
    }).then(result=>{
         res.status(200).json({
            updated_order:result
         })
    }) 
    .catch(err=>{
       res.status(400).json({
        error:err
       })
    })
})










module.exports = router;
