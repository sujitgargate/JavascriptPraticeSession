var async = require('async')
var readFile = require('./asyncWaterFall')
var fileOne = 't1.txt'
var fileTwo = 't2.txt'
function checkAndReadFile(){
    async.parallel({
        Task1: function(callback){
            var data = readFile(fileOne);
            data.then((info)=>{
                callback(null, info)
            })
        },
        Task2: function(callback){
            var data = readFile(fileTwo);
            data.then((info)=>{
                callback(null, info)
            })
        }
    }, function(err, result){
        if(err){
            throw err
        }
        else{
            console.log(result);
        }
    })
}

checkAndReadFile();