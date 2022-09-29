const { json } = require('express')
const express=require('express')
const router=express.Router()
const mongoose=require("mongoose")
const orderSchema=require("../Schema/orderSchema")
const Order=new mongoose.model("Order",orderSchema)

router.post("/order", (req,res)=>{
    console.log(req.body)
    const newOrder= new Order({
        "userId":req.body.userId,
        "orderOwner":req.body.user,
        "order":req.body.orders
    })

    newOrder.save()
    // .then(res.send("order saved"))
})

router.get("/myorder/:id", (req,res)=>{
     console.log(req.params.id)
    const id=req.params.id
    Order.find({userId:id},(err,data)=>{
    if(err){
        console.log(err)
    }else{
        res.send(data)
    }
})


})

module.exports=router