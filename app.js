const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoute = require('./api/Routes/user');
const orderRoute = require('./api/Routes/order');
const uploadRoute = require('./api/Routes/upload');
const xlstojson = require('./api/Routes/exceltojson');



mongoose.connect('mongodb+srv://root:root@cluster0.9zfghm1.mongodb.net/?retryWrites=true&w=majority');

mongoose.connection.on('error',err=>{
    console.log('Not connected with database')
})

mongoose.connection.on('connected',connected=>{
    console.log('Connection to art_board Database done')
})
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json());

app.use('/order',orderRoute);
app.use('/user',userRoute);
app.use('/upload',uploadRoute);
app.use('/filejson',xlstojson)


app.use((req, res, next) =>{
    console.log('running');
    res.status(400).json({
        msg:"Something went wrong"
    })
    res.status(200).json({
        msg: 'App is runnung'
    })

})









module.exports = app;