const prompt = require('prompt-sync')();

const powerNumber =prompt('Enter power for Two  ');

function power(){

    let powerResult=1;
    for(let i=0;i<powerNumber;i++){
        powerResult*=2;
    }

    console.log('2^'+powerNumber + ' is ' + powerResult);
}

power();