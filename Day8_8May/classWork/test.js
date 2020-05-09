function add(){
    var counter = 0;
    function inner(){
        counter+=1;
        return counter;
    }
    return inner();
}

console.log(inner());
console.log(inner());
console.log(inner());