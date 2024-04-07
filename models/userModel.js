const mongoose = require('mongoose')

const useSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true
    },
    lastName:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    address:{
        type:String,
        required:true,
         
    },
    isverified:{
        type:Number,
        default:0
    },
    role:{
        type:Number,
        default:0
    },
    image:{
        type:String,
        
    },
    gender:{
      type:String,
      default:null
    },
    dateofbirth:{
    type:String,
    default:null
    },
    contactNumber:{
      type:Number,
      default:null
    },
    about:{
        type:String,
        default:null
    }

   
},{timestamps:true})

module.exports= mongoose.model('user',useSchema)