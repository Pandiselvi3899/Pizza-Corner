const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://foodie:pandiselvi@cluster0.08g8i.mongodb.net/test'

mongoose.connect(mongoURL , {useUnifiedTopology:true , useNewUrlParser:true})

var db = mongoose.connection

db.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull');
})

db.on('error' , ()=>{
    console.log(`Mongo DB Connection failed`);
})

module.exports =mongoose