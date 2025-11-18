const http=require('http');
const express=require("express");
const app=express();
const server=http.createServer(app);
const path = require('path');


const adminRoute=require('./routes/admin');
const shopRoute=require('./routes/shop');
app.use(express.static(path.join(__dirname,'public')));

app.use("/admin",adminRoute);

app.use(shopRoute);

server.listen(3000);