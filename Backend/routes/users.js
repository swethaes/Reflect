const router = require("express").Router();
const {User} = require("../models/user");
const bcrypt = require("bcrypt");


router.post("/", async(req,res)=>{
    try{
        const user = await User.findOne({email:req.body.email});
        if (user)
           return res.status(409).send({message:"User with given email already exists!"});
        await new User({...req.body}).save();
        res.status(201).send({message: "User Created Succcessfully"})


    }
    catch(error){
            res.status(500).send({message:"Internal Server Error"})


    }
});


module.exports = router;
