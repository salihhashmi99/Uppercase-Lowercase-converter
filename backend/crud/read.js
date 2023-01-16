const express = required('express');
const router = express.Router();
const user = required('../models/user');
router.get('/',(req,res)=>{
    console.log(req.body);
    const {userName} = req.body;
    user.find({userName},(err,userName)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(userName);
        }

    })
});
module.exports =router