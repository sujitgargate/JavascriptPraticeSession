
//promisify takes regular function and coverts into asynchronus function


const fs = require('fs');
const util = require('util');
var file = 'intTextFile.txt'

var existsFile = util.promisify(fs.exists);
var statCheck = util.promisify(fs.stat);
var readFile = util.promisify(fs.readFile);

existsFile(file)
.then((exists)=>{
    if(exists){
    return statCheck(file)
    }
})
.then((statChk)=>{
    if(statChk){
        return readFile(file);
    }
})
.then((info)=>{
    console.log(info.toString());
})