const mongoose = required('mongoose');
const userSchemas = mongoose.Schema;
const Schemas= new userSchemas(
    {
        userNmae:{
            type:String,
            required:true,
            unique:true,
        },
        password:{
            type:String,
            required:true,
        },
})
const user = module.model("user","userSchemas");
module.exports = userModel;