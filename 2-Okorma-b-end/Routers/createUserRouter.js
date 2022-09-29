const express=require('express')
const { default: mongoose } = require('mongoose')
const router=express.Router()
const userSchema=require('../Schema/userSchema')
const User=new mongoose.model('User',userSchema)


router.post('/user', (req,res)=>{

    const {name,email,phone,password}=req.body

    const newUser=new User({
        'name':name,
        'email':email,
        'phone':phone,
        'password':password
    })
    newUser.save()
    .then(res.send(newUser))


})

module.exports=router