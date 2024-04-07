
const Shop = require('../models/shopModel')
// create shop
exports.createShop = async(req,res)=>{
    try{
        const {name,address}= req.body;
        if(!name || !address){
            return res.status(400).json({
                success:false,
                message:"All field are required"
            })
        }
        
        const existingshop = await Shop.findOne({name})
        
        if(existingshop){
            return res.status(400).json({
                success:false,
                message:"This shop already exist"
            })

        }

        const shop = await new Shop({
            name:name,
            address:address
        }).save()

        return res.status(200).json({
            success:true,
            message:"Shop created success"
        })
        
    }
    catch(err){
        return res.status(400).json({
            success:false,
            message:"Error to make shop "
        })

    }
}
// update shop
exports.updateShop = async(req,res)=>{
    try{
        const {name,address}= req.body;
        
        const {id}= req.params;
        
        const shop = await Shop.findByIdAndUpdate(id,{
            name:name,
            address:address
        },{new:true})
         
        return res.status(200).json({
            success:true,
            message:"Shop updated success",
            shop
        })
        
    }
    catch(err){
        return res.status(400).json({
            success:false,
            message:"Error to update shop "
        })

    }
}

// get all shop
exports.getAllshop = async(req,res)=>{
    try{
          
        const shop = await Shop.find({})
         
        return res.status(200).json({
            success:true,
            message:"All shop data got",
             
            shop
        })
        
    }
    catch(err){
        return res.status(400).json({
            success:false,
            message:"Error to get data "
        })

    }
}

// get single shop
exports.getSingleshop = async(req,res)=>{
    try{
          
        const {id}=req.params;
      const shop = await Shop.findById(id)
         
        return res.status(200).json({
            success:true,
            message:"single data got",
            shop
        })
        
    }
    catch(err){
        return res.status(400).json({
            success:false,
            message:"Error to get data "
        })

    }
}

exports.deleteshop=async(req,res)=>{
    try{
        const {id} = req.params;
    
        await Shop.findByIdAndDelete(id)
        
        return res.status(200).json({
            success:true,
            message:"Shop deleted success"
    
        })

    }
    catch(err){
        console.log(err)
      return res.status(400).json({
        success:false,
        message:"Error in deleting shop"
      })
    }
     
}