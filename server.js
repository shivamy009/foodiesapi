const express = require('express')
require('dotenv').config();
const cors= require('cors')
const database =require('./config/database')
const cloudinary = require('./config/cloudinary')
// const authRoute=require('./controllers/userController')
const fileupload = require('express-fileupload')

const authRoute = require('./routers/authRoute')
const shopRoute = require('./routers/shopRoute')
const foodRoute = require('./routers/foodRoute')
// const profileRoute = require('./routers/profileRoute')

const app = express();
const PORT = process.env.PORT ||8080


database();
cloudinary.cloudinaryconnect();

app.use(express.json())
app.use(cors())
 
app.use(fileupload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));
app.use('/api/v1/auth',authRoute)
app.use('/api/v1/shop',shopRoute)
app.use('/api/v1/food',foodRoute)
// app.use('/api/v1/profile',profileRoute)
 

app.get('/shubham',(req,res)=>{
    res.send("Hi shivam yadava")
})

app.get('/shubham',(req,res)=>{
    res.send("Hi shivam yadava")
})
app.listen(PORT,()=>{
    console.log(`Listening at port ${PORT}`)
})




