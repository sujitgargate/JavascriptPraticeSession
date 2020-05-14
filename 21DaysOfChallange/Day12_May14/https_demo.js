var http= require('http')

var server=http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'})
    response.end("Welcome to browser")
});

server.listen(800,function(){
    console.log("Server started");
    
})