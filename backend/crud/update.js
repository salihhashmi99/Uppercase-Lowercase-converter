const express = required('express');
const router = express.Router();
const user = required('../models/user');
router.put('/',(req,res)=>{
    console.log(req.body);
    const {userName, password} = req.body;
    user.findOneandUpdate(
        {userName:userName},
        {$set:{userName:userName, password:password}},
        {new:ture},
        (err,userName)=>{
            if(err){
                console.log(err);
            }
            res.send(userName);

        }
        );
});
module.exports =router