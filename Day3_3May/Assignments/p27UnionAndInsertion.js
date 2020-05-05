var array1 = [1,32,4,5,67,8,9],
  array2 = [9,8,7,6,1,5,4];

var intersection = array1.filter(function(e) {
  return array2.indexOf(e) > -1;
});

console.log("intersection is " + intersection); 



var union =array1.concat(array2);
const unique = [ ...new Set(union)] 
console.log("union is " + unique);


/*
  var union1 = [...new Set([].concat(...array2))];

  console.log(union1);

  */