var fs=require('fs');
var file ='pizza.pdf';
console.log('Program started');

var data=fs.readFile(file, function(err,info){
    if(err){
        throw err;
    }else{
        console.log(info.toString);
        
    }
})
console.log(data.toString());
console.log('program ended');