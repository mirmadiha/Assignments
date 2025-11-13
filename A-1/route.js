const fs=require("fs");
const requestHandler=(req,res)=>{
const url=req.url;
const method=req.method;
if(url==='/create-user' && method=="POST"){
    const body=[];
    req.on('data',(chunk)=>{
        console.log(chunk);
        body.push(chunk);
    });
    req.on('end',()=>{
        const parsedBody=Buffer.concat(body).toString();
        console.log(parsedBody);

    })
}
if(url==='/'){
        res.write('<html>');
        res.write('<head><title>Assignment1</title></head>');
        res.write('<body><h1>welcome to home page</h1></body>');
        res.write('<form action="/create-user" method="POST" ><input type="text" placeholder="username" name="message"><button type="submit">Submit</button></input></form>')
        res.write('</html>');
        res.end();
    }
   if (url === "/users") {
        res.write("<html>");
        res.write("<head><title>Assignment 1</title></head>");
        res.write("<body><ul><li>user1</li> <li>user2</li> <li>user3</li> </ul></body>");
        res.write("</html>");
        res.end();
  } 
}
module.exports={
    handler:requestHandler,
}