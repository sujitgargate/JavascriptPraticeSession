var file  ='intTextFile.txt'
var bubble=require('./bubbleSort')
const fs = require('fs')

function readForSort(){
    fs.exists(file,function(exists){        //checking existance of file
        if(exists){
            fs.stat(file,function(err,statCheck){
                if(statCheck.isFile()){
                    fs.readFile(file,function(err,data){
                        if(err){
                            throw err;
                        }
                        else{
                            const arrayData =data.toString().split(",");
                            const numberArray = arrayData.map(Number);
                            bubble(numberArray, function(sortedData){
                                console.log("Sorted array " + sortedData);
                            })
                        }
                    })
                }
            })
        }
    })
}

readForSort();