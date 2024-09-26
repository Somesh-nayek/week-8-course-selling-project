const {router}=require("express");
app.post("/course/purchase",async function (req,res) {
    res.json({
        message:"Bought purchase route"
    })
});
app.post("/course",async function (req,res) {
    res.json({
        message:"Sign up route"
    })
});