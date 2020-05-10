//Example 1

function show(){
    var j="This called in outer function"
    console.log(j)
    function innerFunction(){
        var k="This is called in inner function"
        console.log(k);
        console.log(j);
    }innerFunction();
}
show();


//Example 2

var addTo=function(passed){
    var inner=2;
    return inner+passed;
}