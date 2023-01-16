const express = required('express');
const router = express.Router();
const user = required('../models/user');
router.post('/',(req,res)=>{
    console.log(req.body);
    const {userName, password} = req.body;
    const newUser = user({userName,password});
    newUser.save((err,user)={
        if(err){
            console.log(err);
        }
        else
        {
            res.send(user);
        }
    });
});
module.exports =router;