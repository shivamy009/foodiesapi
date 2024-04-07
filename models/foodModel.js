const mongoose = require('mongoose')

const foodSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true

    },
    price:{
        type:Number,
        required:true,

    },
    vegnonveg:{
        type:String,
        required:true
    },
    quantity:{
       type:Number,
       required:true
    },
    photo:{
        type:String,
        // required:true,
    },
    shop:{
        type:mongoose.ObjectId,
        ref:'shop',
        required:true
    }
})

module.exports= mongoose.model('Food',foodSchema)