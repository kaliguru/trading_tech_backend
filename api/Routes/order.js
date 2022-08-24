const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Order = require('../modules/orderModel');


router.get('/all',(req, res, next)=>{
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

router.post('/new',(req, res, next)=>{
    const order = new Order({
        _id:new mongoose.Types.ObjectId,
        width: req.body.width,
        widthin:req.body.widthin,
        height: req.body.height,
        heightin:req.body.heightin,
        shopName: req.body.shopName,
        shopaddress:req.body.shopaddress,
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
            width: req.body.width,
            widthin:req.body.widthin,
            height: req.body.height,
            heightin:req.body.heightin,
            shopName:req.body.shopName,
            shopaddress: req.body.shopaddress,

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
