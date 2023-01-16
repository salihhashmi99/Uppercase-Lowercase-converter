const express =required('express');
const router = express.Router();
const userModel = required('../models/user');
router.post("/",(req,res)=>{
    const {userName, password} = req.body;
    const newUser = userModel({
        email,
        password
    })
    newUser.save().then=(()=>{
        res.json("Signed Up successfully");
    })
})
module.exports = router;