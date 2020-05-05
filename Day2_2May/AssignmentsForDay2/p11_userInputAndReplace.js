const prompt = require('prompt-sync')();  

 var name=prompt('enter your name  '); 


const str = 'Hello UserName , How are you?';



var replacedName=str.replace('UserName',name);

console.log(replacedName);


