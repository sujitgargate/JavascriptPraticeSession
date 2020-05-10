var fs=require('fs')
var bubble=require('./bubbleSort')
var file ='intTextFile.txt'

function readFileData(){
    fs.exists(file,function(exists){
        if(exists){
            fs.stat(file,function(err,statCheck){
                fs.readFile(file,function(err,data){
                    if(!err){
                        const arrayData=data.toString().split(",");
                        //const numberArray=arrayData.map(Number);
                        //bubble(numberArray,function(sortedData)
                        bubble(arrayData,function(sortedData){
                            console.log(sortedData);
                        })
                    }else{
                        throw err;
                    }
                })
            })
        }
    })
}

readFileData();