var fs=require("fs");

console.log('Program Started');
fs.readFileSync('intTextFile.txt',function(err,data){
    if(!err){
        var data1=data.toString()
        console.log(data1);
    }else{
        console.log('Error occoured');
        
    }
})

console.log('Program ended');


