/////////// Example 1 //////////////////////
function show(){
    console.log("This show function");   
}
function geek(callBack){
    callBack();
}
geek(show);

/////////// Example 2 ///////////////////////
function addition(a,b){
    console.log( a+b);
}
function anotherGeek(callBack2){
    var a=2,b=5;
    callBack2(a,b);
}
anotherGeek(addition);
 
////////////  Examplet 3 //////////////////////

function geek2(callBack3){
    var a=2,b=4;
    callBack3(a,b)
}
geek2(function addition(a,b){
    console.log(a+b);
})