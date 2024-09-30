const express = require("express");
const bcrypt = require("bcryptjs")
const app = express();
const dotenv = require("dotenv")
dotenv.config({path:"./config.env"})
const port = process.env.PORT;
const moncon = require("../db/conn")
const path = require("path")

moncon()
app.use(express.json());

app.use(require("../router/auth"))
const User = require("../Model/userSchema")
const dirname = path.resolve();
app.use('../public/uploads', express.static(path.join(dirname, '../public/uploads')));
// middle ware is like middle man who are response between req and res 
// const middleware =(req,res,next)=>{
//     console.log("hello midlleware");
//     next();
// }

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.listen(port,()=>{
    console.log(`you are connected at port no ${port}`)
})