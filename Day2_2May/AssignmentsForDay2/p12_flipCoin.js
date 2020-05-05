const prompt = require('prompt-sync')();   

const numberOfFlips = prompt('Enter the Number of times to flip :  ');

for(i=0;i<numberOfFlips;i++){

    var randomNumber=(Math.random());
}

if(randomNumber<0.5){
    console.log('It is a tails with ' +randomNumber*100 + '%');
}else{
    console.log('it is a heads with ' + randomNumber*100 +'%');
}