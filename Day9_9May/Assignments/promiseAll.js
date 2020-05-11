//itrerating thru muiltiple promises

var p = Promise.all([1,2,3]);
var p2 = Promise.all([1,2,3, Promise.resolve(444)]);
var p3 = Promise.all([1,2,3, Promise.reject(555)]);             //no catch block used so it will throw err

setTimeout(function() {
    console.log(p);
    console.log(p2);
    console.log(p3);
});