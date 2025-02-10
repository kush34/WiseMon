import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email : {
        type : String,
        require : true
    },
    password:{
        type:String,
        require : true
    },
    salary:{
        type:Number,
        require : true,
        default:30000
    }
})

const User = mongoose.model('User', userSchema);

export default User;