const express=require("express");

const app=express();

const port=8000;

app.get("/",(req,res)=>{
    return res.send("hello there!");
});
app.get("/login",(req,res)=>{
    return res.send("Yep!you are here to login");
});app.get("/logout",(req,res)=>{
    return res.send("Byee! see you soon");
});

app.listen(port , ()=>{
    console.log("server is up and running...");
})

