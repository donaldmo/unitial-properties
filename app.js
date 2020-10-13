const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const listingRoutes = require('./routes/listing')


const app = express();

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/listing', listingRoutes);

app.listen(8080);

// d89a047ae1c84f96b2aedfc39bc359fb

// const mongodbUrl = 'mongodb://admin:LR6p8CMXo8ebuhJjL7yB1Ltv@mongodb.back4app.com:27017/properties?ssl=true';

// const url = 'mongodb+srv://dmotswiri@gmail.com:Rebualefe1$0@cluster0.yjoup.mongodb.net/property?retryWrites=true&w=majority'

// const mongodbLocalUrl = 'mongodb://127.0.0.1:27017/properties';
// mongoose.connect(mongodbLocalUrl).then(res => {
//   console.log(res);
//   app.listen(8080);
//   console.log("Server running at port 8080!");
// })
// .catch(error => {
// 	console.log(error);  
// });
