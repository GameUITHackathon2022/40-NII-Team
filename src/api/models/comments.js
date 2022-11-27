const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const comments = new Schema({ 
      statusID:String,
      name: String,
      content:String
      
    
},{timestamps: true})


module.exports = mongoose.model('comments', comments)