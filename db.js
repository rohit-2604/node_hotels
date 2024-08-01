const mongoose = require ('mongoose');
require ('dotenv').config();
const mongourl =process.env.MONGODB_URL_LOCAL
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