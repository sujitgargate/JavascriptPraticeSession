var fileSystem=require('fs');

fileSystem.write('myJavaScriptTextFile.txt','This is my text' ,function(err){
    if(err) throw err;
    console.log('Replaced');
});

