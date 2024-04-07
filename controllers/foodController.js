const { Cloudinaryuploader } = require("../utils/Imageuploader");
const Food = require('../models/foodModel')

// create food
exports.createFood = async (req,res)=>{
    try{
        const  {name,description,price,vegnonveg,quantity,shop}=req.body
        const  file =req.files.photo;

        // console.log(file)
        // console.log(req)
        if(!name || !description || !price || !vegnonveg || !quantity || !shop || !file){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            })
        }

        // console.log("uploaded")

        const response = await Cloudinaryuploader(file,"foodies")
        // console.log("response is",response)

        const food = await new Food({
            name:name,
            description:description,
            price:price,
            vegnonveg:vegnonveg,
            quantity:quantity,
            shop:shop,
            photo:response.secure_url
        }).save();
        
        return res.status(200).json({
            success:true,
            message:"Food created success",
            food
        })
    }
    catch(err){
        console.log(err)
        return res.status(400).json({
            success:false,
            message:"Error to make product"
        })
    }
}

// get food

exports.getAllfood= async(req,res)=>{
    try{

        const food = await Food.find({}).populate('shop')

         
        return res.status(200).json({
            success:true,
            message:"All data fetched",
            total:food.length,
            food
        })


    }
    catch(err){
        console.log(err)
        return res.status(400).json({
            success:false,
            message:"Error while getting all data"
        })
    }

}
// get single food

exports.getsinglefood= async(req,res)=>{
    try{
        
        const {id}= req.params;

      const food = await Food.findById(id).populate('shop')

         
        return res.status(200).json({
            success:true,
            message:"single food fetched",
             
            food
        })


    }
    catch(err){
        console.log(err)
        return res.status(400).json({
            success:false,
            message:"Error while getting single data data"
        })
    }

}

// update food
exports.updateFood = async(req,res)=>{
    try{
        const {id}= req.params;
        const  {name,description,price,vegnonveg,quantity}=req.body

        // console.log(id)
        // console.log(name,description,price,vegnonveg,quantity)
   
        const food = await Food.findByIdAndUpdate(id,{
          name,description,price,vegnonveg,quantity
   
        },{new:true})
        // console.log("i am here")
        return res.status(200).json({
            success:true,
            message:"data updated success",
            food
        })

    }
    catch(err){
        return res.status(400).json({
            success:false,
            message:"Error while updating food data"
        })
    }

    
}

// delete product

exports.deleteFood = async(req,res)=>{

    try{
        const {id} = req.params;
    
        await Food.findByIdAndDelete(id)
        
        return res.status(200).json({
            success:true,
            message:"Food deleted success"
    
        })

    }
    catch(err){
       console.log(err)
       return res.status(400).json({
        success:false,
        message:"Error while deleting data"
       })
    }


}

// filter product

exports.filterFood=async(req,res)=>{
    try{
       const {radio}=req.body;
       let arg={};
       if(radio.length) arg.price = {$gte: radio[0] , $lte:radio[1]}
       const products = await Food.find(arg)

       return res.status(200).json({
        success:true,
        message:"Data filter success",
        products
       })

    }
    catch(err){
        console.log(err)
        return res.status(400).json({
            success:false,
            message:"Error white filter product ",
            err:err.message
        })
    }
}