const mongoose = require("mongoose")

const orderSchema=mongoose.Schema({
    userId:{type:String},
    orderOwner:{type:Object},
    order:{type:Array}
})

module.exports=orderSchema