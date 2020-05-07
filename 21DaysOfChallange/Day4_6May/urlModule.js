var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2020&month=May&day=6';
var q = url.parse(adr, true);

console.log('host is : ' +q.host); //returns 'localhost:8080'
console.log('pathname  is : ' +q.pathname); //returns '/default.htm'
console.log('calender is : ' +q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'
console.log(qdata.year); 
console.log(qdata.day); 
