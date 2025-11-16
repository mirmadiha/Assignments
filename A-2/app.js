const http=require("http");
const express=require("express");

const app=express();

app.use((req,res,next)=>{
    console.log("This middleware runs always!");
    next();
})

app.use("/users",(req,res,next)=>{
    res.send("<h1>Hello from users!</h1>");
})

app.use("/",(req,res,next)=>{
    res.send("<h1>Hello from Home!</h1>");
})


const server=http.createServer(app);
server.listen(3000);