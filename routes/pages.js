const express=require('express');
const router=express.Router();


router.get("/",(req,res)=>{
    res.render("website",{msg:loginornot});
});
router.get("/login",(req,res)=>{
    res.render("login");
});
router.get("/register",(req,res)=>{
    res.render("register");
});
router.get("/threadmill",(req,res)=>{
    res.render("threadmill",{msg:loginornot});
});
router.get("/multigym",(req,res)=>{
    res.render("multigym",{msg:loginornot});
}); 
router.get("/deltoid_raise",(req,res)=>{
    res.render("deltoid_raise",{msg:loginornot});
});
router.get("/bench_press",(req,res)=>{
    res.render("bench_press",{msg:loginornot});
});
router.get("/fitness_pump",(req,res)=>{
    res.render("fitness_pump",{msg:loginornot});
});
router.get("/mini_stepper",(req,res)=>{
    res.render("mini_stepper",{msg:loginornot});
});
router.get("/multi_gym",(req,res)=>{
    res.render("multi_gym",{msg:loginornot});
});
router.get("/exercise_bike",(req,res)=>{
    res.render("exercise_bike",{msg:loginornot});
});



router.get("/logout",(req,res)=>{
    loginornot = false;

    res.setTimeout(2000,()=>{
        res.redirect('/');
    })
    
}); 


module.exports=router;