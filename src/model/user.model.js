const mongoose=require('mongoose')

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

module.exports=new mongoose.model('user',userSchema)