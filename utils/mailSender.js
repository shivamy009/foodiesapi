const nodemailer = require('nodemailer')

require('dotenv').config()

exports.sendverifymail = async(name,email,id)=>{
    try{
         const transporter= nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            port:587,
            secure:false,
            requireTLS:true,
            auth:{
                user: process.env.MAIL_USER,
                pass:process.env.MAIL_PASS,

            }
         });

         const mailOption={
            from:process.env.MAIL_FROM,
            to:email,
            subject:'For verification of mail from foodies app',
            html:'<p> Hii '+name+', please click here to <a href="http://localhost:8000/api/v1/auth/verify?id='+id+'"> verify </a> your mail </p> '
         }

         transporter.sendMail(mailOption,(err,info)=>{
            if(err){
                console.log(err.message)
            }else{
                console.log('Mail has been send',info)
            }
         })
    }
    catch(err){
        console.log(err)
    }
}