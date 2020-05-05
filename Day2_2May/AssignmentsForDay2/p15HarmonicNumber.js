const prompt= require('prompt-sync')();
const n=prompt("Enter Nth Harmonic Number");
var harmonic=1;

for(let i=2;i<n;i++){
    harmonic+= 1/i;
}
console.log(harmonic);