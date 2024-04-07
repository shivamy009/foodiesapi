const jwt = require('jsonwebtoken')
//require signin
const User = require('../models/userModel')

exports.requireSignin=async(req,res,next)=>{
    try{
        const decode = await jwt.verify(req.headers.authorization,process.env.JWT_SECRET)
        req.user=decode;

        next();

    }
    catch(err){
        console.log(err)
        return res.status(400).json({
            success:false,
            message:"Failed in token verification"
        })
    }

}

// is admin
exports.isadmin =async(req,res,next)=>{
    try{
        // const result= req.user;

         
    const user = await User.findById(req.user.id)
    console.log(req.user)
    console.log(user)
    
    // console.log(result)
    if(user.role !==1){
        return res.status(401).json({
            success:false,
            message:"unothorized access"

        })
    }else{
        next();
    }
    }
    catch(err){
    console.log(err)
    return res.status(404).json({
        success:false,
        message:"failed in checkinng auth"
    })
    }
}

// is verified

exports.isVerifiedforsignin = async(req,res,next)=>{
    try{
        const {email}=req.body;

        const user =await  User.findOne({email})

        if(user.isverified !==1){
            return res.status(400).json({
                success:false,
                message:"Please verify your email before login"
            })
        }else{
            next()
        }
    }
    catch(err){
        console.log(err)
        return res.status(404).json({
            success:false,
            message:"failed in checkinng auth"
        })
    }
}