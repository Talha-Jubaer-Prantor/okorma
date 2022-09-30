const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')
const cartSchema=require('../Schema/cartSchema')
const Cart= mongoose.model('Cart',cartSchema)


router.post('/cart',async (req,res)=>{
    
console.log(req.body)
    await Cart.findOneAndUpdate({email:req.body.email},{
        $push:{
            cart:req.body.selectedProduct
        }
    })
   
    
})

module.exports=router