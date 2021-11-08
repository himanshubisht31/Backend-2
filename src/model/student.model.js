const mongoose=require('mongoose')

const studentSchema = new mongoose.Schema({
    roll_number:{type:Number,required:true},
    batch: { type: String },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'users',
        required:true
    }
}, {
    versionKey: false,
    timestamps:true
})

module.exports = new mongoose.model("student", studentSchema);