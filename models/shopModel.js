const mongoose = require('mongoose')

const shopSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
})

module.exports= mongoose.model('shop',shopSchema)
 