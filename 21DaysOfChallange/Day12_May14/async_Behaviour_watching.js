/**
 * In this example we can see how java script's asynchronous nature behaves
 * 
 * 1st starting will print 
 * 2nd stopping will print
 * 3rd 0 sec delay will print
 * 4th 2 sec delay will print
 */

 console.log('stating');

 setTimeout(() =>{
     console.log('2 sec delay');
 },2000);

 setTimeout(()=>{
     console.log('0-0 sec delay');
 },0)

 setTimeout(()=>{
    console.log('0-1 sec delay');
},0)

 console.log('stopping');
 
 