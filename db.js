const mongoose = require ('mongoose');

const mongourl = "mongodb://127.0.0.1:27017/hotels"
mongoose.connect(mongourl)


const db =  mongoose.connection

db.on('connected',()=>{
    console.log('Connected!');
})

db.on('error',(err)=>{
    console.error('connection error',err);
})

db.on('disconnected',()=>{
    console.log("Disconnected!");
})

module.exports = db;