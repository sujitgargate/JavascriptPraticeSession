var http=require('http');
var color=require('chalk');

console.log(color.blue('Hello There'))

function onRequest(request,response){
    response.writeHead(200,{'Content-Type' : 'text/plain'});  //200 is status:ok, 2nd parameter is type of response
    response.write('Hello world');
    response.end();
}

http.createServer(onRequest).listen(8000);