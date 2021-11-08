const mongoose = require('mongoose')
const bcryptjs=require('bcryptjs')

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    profile_photo_url:{type:String,required:true},
    roles:[{type:String}]
}, {
    versionKey: false,
    timestamps:true
})

userSchema.pre('save', function (next) {
    
})


module.exports=new mongoose.model('user',userSchema)