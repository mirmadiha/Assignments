const http=require('http');
const express=require('express');
const app=express();
const path=require("path");
app.set("view engine","ejs");
app.set('views','views');

app.use(express.static(path.join(__dirname,'public')));

const shopRoutes=require('./routes/shop.js');
const userRoutes=require('./routes/users.js');

app.use(userRoutes);

app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).render('404',{pageTitle:'Page not Found!'});
})

const server=http.createServer(app);

server.listen(3000);