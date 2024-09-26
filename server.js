const express=require('express');
const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const {userRoute}=require("./users/userRoute")

const app=express();



app.listen(3000);