var cashRegister=[10,100,40,110,5];
let total=0;

for(let i=0;i<cashRegister.length;i++){
    total+=cashRegister[i];
}

withDiscount=total-cashRegister[0];
console.log(" Yout total bill is " +withDiscount);

