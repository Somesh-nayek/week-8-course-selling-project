const {router}=require("express");
const userRoute=router();
userRoute.post("/users/signUp",async function (req,res) {
    res.json({
        message:"Sign up route"
    })
});
userRoute.post("/users/signIn",async function (req,res) {
    res.json({
        message:"Sign In route"
    })
});
userRoute.post("/users/purchases",async function (req,res) {
    res.json({
        message:"Purchases route"
    })
});

modules.exports({
    userRoute:userRoute
})