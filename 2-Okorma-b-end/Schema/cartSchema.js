const mongoose= require("mongoose")

const cartSchema=mongoose.Schema({
    userId:{type:String},
    cart:{type:Array}
})

module.exports=cartSchema