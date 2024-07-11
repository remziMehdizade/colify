const express =require('express');
const router =express.Router();
const User =require('../models/UserModel')

router.get('/',async (req,res)=>{



    try {
        const users= await User.find({})
        res.json(users)
    } catch (error) {
        
    }


})


router.post('/',async (req,res)=>{

    const eklenecekUser = new User(req.body);
    const sonuc= await eklenecekUser.save();
    res.json(sonuc);
    console.log(sonuc)
})

router.patch('/:id',async (req,res,next)=>{
    try {
        const sonuc= await User.findByIdAndUpdate({_id:req.params.id},req.body,{new:true});
        res.json(sonuc);
        console.log(sonuc)
    } catch (error) {
        
        next(error)
        
    }

    })


module.exports=router;