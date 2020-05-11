var fs=require('fs')
var bubble=require('./bubbleSort')
var file ='intTextFile.txt'

function readFileData(){
    fs.exists(file,function(exists){                                        //returns boolean
        if(exists){
            fs.stat(file,function(err,statCheck){                           
                fs.readFile(file,function(err,data){
                    if(!err){                                               //if no error the execute below
                        const arrayData=data.toString().split(",");
                        //const numberArray=arrayData.map(Number);          //maps string to number
                        //bubble(numberArray,function(sortedData)           //osrting using number
                        bubble(arrayData,function(sortedData){  
                            console.log(sortedData);
                        })
                    }else{
                        throw err;                                             //error throw
                    }
                })
            })
        }
    })
}

readFileData();