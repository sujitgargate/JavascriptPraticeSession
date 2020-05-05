
var number=[1,0,1,5,-5,1]
var isFound=false;

var length=number.length;
for(var i=0;i<length-2;i++){
    for(var j=i+1;j<length-1;j++){
        for(var k=0;k<length;k++){
            if(number[i]+number[j]+ number[k]==0)
            {
                isFound=true;
            }
        }
    }
}

if(isFound==true){
    console.log('given array contains triplets that sums to zero')  //and triplets are: ' +number[i] +'' +number[j]+ ''+number[k]);
}else{
    console.log('Not found')
}

