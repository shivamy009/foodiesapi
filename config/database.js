const mongoose = require('mongoose')

require('dotenv').config();
const dbconnect = ()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>console.log("Db connected success"))
    .catch((err)=>{
        console.log("Connection failed")
        console.log(err)
        process.exit(1)

    })
}

module.exports=dbconnect;