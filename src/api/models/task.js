const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const task = new Schema({ 
      username: String,
      content : String,
      credit: Number
      
    
},{timestamps: true})


module.exports = mongoose.model('status', status)