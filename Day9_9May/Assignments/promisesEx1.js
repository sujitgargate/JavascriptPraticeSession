let promises=new Promise(function(resolve,reject){
    //cleaning room example
    
    let isClean=false;

    if(isClean){
        resolve("Clean")
        
    }else{
        reject(" Not clean");
    }
})

.then((fromResolve)=>{                    //function_name.then() 
    console.log('Room is ' +fromResolve );
})
.catch(function(fromReject){
    console.log('Room is'+fromReject);
})