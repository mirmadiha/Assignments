const http=require("http");
const server=http.createServer((req,res)=>{
    const url=req.url;
    if(url==='/'){
        res.write('<html>');
        res.write('<head><title>Assignment1</title></head>');
        res.write('<body><h1>This is  home page</h1></body>');
        res.write('</html>');
        res.end();
    }
     else if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>Assignment 1</title></head>");
    res.write("<body><h1>This is the Users Page</h1></body>");
    res.write("</html>");
    res.end();
  } 
  else {
    res.write("<html>");
    res.write("<head><title>404 Not Found</title></head>");
    res.write("<body><h1>Page Not Found</h1></body>");
    res.write("</html>");
    res.end();
  }
});
server.listen(3000);