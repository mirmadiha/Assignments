const express=require('express');
const app=express();
const router=express.Router();

router.use('/users',(req,res,next)=>{
    res.render('users',{pageTitle:'users',path:'/users'});
})

module.exports=router