const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema.Types

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    pic:{
        type:String,
        default:"https://res.cloudinary.com/vs2204cloud/image/upload/v1710525867/xu2xodjtohc0wude7aqf.jpg"
    },
    followers:[{type:ObjectId,ref:"User"}],
    following:[{type:ObjectId,ref:"User"}]
})

mongoose.model("User",userSchema)