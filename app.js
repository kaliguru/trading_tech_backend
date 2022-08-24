const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoute = require('./api/Routes/user');
const orderRoute = require('./api/Routes/order');


mongoose.connect('mongodb+srv://root:root@learning.to88d.mongodb.net/?retryWrites=true&w=majority');

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

app.use((req, res, next) =>{
    console.log('running');
    res.status(400).json({
        Error: 'Something is wrong'
    })

})
app.use((req, res, next) =>{
    console.log('running');
    res.status(200).json({
        msg: 'app is running'
    })

})









module.exports = app;