const prompt = require('prompt-sync')();  

const year=prompt("Enter year to check ");

if((year%4 && year%400 && year%100)==0){
    console.log("This is a leap year "+ year);
} else{
    console.log('Not a leap year');
}
