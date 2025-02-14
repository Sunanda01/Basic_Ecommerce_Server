const mongoose=require('mongoose');
const User=require('../Model/User');
const Product=require('../Model/Product');
const OrderSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User,
        required:true
    },
    products:[
        {
            product:{
                type:mongoose.Schema.Types.ObjectId,
                ref:Product,
                required:true
            },
            quantity:{
                type:Number,
                required:true,
                min:1
            },
            price:{
                type:Number,
                required:true,
                min:0
            }
        }
    ],
    totalAmount:{
        type:Number,
        required:true,
        min:0
    },
    stripeSessionId:{
        type:String,
        unique:true

    },
},{timestamps:true});
module.exports=mongoose.model('Orders',OrderSchema);