const express = required('express');
const router = express.Router();
const user = required('../models/user');
router.delete('/',(req,res)=>{
    console.log(req.body);
    const {userName} = req.body;
   user.deleteOne({userName,userName},(err,userCity)=>{
    if(err){
        console.log(err);
    }
    else{
        res.send(userName)
    }
   })
});
module.exports =router