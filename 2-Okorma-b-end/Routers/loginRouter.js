const express=require('express')
const router=express.Router()
const jwt=require('jsonwebtoken')
const mongoose=require('mongoose')
const userSchema = require('../Schema/userSchema')
const User= new mongoose.model('User',userSchema)

router.post('/signin', async(req,res)=>{
    try{
    const {email,password}=req.body
    const validUser=await User.find({email:email})
    if(validUser){
        const isValidPassword=await validUser[0].password==password
        if(isValidPassword){
        const userToken= jwt.sign({
            name:validUser[0].name,
            email:validUser[0].email
        },process.env.JWT_SECRET)
        res.send({userToken})
    }else{console.log(err,'err found')}
    }
}catch(err){
    res.send(err)
    console.log(err)
}

})

module.exports=router