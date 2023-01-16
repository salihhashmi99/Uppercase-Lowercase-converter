const express = required('express');
const router = express.Router();
const userModel = required("../models/user.");
router.post('/',(req, res)=>{
    const {userNmae,password} = req.body;
    if(userDetails){
        res.json("logged in successfully");
    }
    else
    {
        res.json("Please, create the app first");
    }

})