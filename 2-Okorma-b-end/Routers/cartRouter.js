const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')
const cartSchema=require('../Schema/cartSchema')
const Cart=new mongoose.model('Cart',cartSchema)


router.post('/user',(req,res)=>{
    

    
    const newCart=new Cart({
        'userId':req.body.,
        'cart':[]
    })

    newCart.save()
    
})

module.exports=router