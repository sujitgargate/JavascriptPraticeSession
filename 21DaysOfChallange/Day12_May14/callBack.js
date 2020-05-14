var file='intTextFile.txt'
var fs=require('fs')

var data=fs.readFile(file,function(err,data){
    if(err){
        console.log('something went worng');
    }else{
        console.log(data.toString());
    }
});


console.log('Program ended')