const mongoose= require('mongoose');

const UserSchema= mongoose.Schema({
    name:{
        type:String,
        recquired:true
    },
    password:{
        type:String,
        recquired:true
    }
})
 const User= mongoose.model('USER', UserSchema);
 module.exports=User;