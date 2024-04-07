
const cloudinary = require('cloudinary').v2

exports.Cloudinaryuploader = async (file,folder)=>{
    const options = {folder}
    console.log("temp file path",file.tempFilePath)
    options.resource_type="auto";
   return  await cloudinary.uploader.upload(file.tempFilePath,options)
}