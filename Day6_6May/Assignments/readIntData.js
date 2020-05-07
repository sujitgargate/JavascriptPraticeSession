var path = require('path')
var fs = require('fs');

extension =path.extname('intTextFile.txt')
//console.log(extension)
if(extension=='.txt'){
    console.log('Input file format is correct , Processing...')
    fs.readFile('intTextFile.txt', function(err, data) {
        if(err) throw err;
        var array = data.toString().split("\n");
        
        for(i in array){
            array[i]=parseInt(array[i]);
        }
        console.log(bubble_Sort(array))
    });
}else{
    console.log('Wrong File input')
}

function bubble_Sort(a)
{
    var swapp;
    var n = a.length-1;
    var x=a;
    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {
            if (x[i] > x[i+1])
            {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
 return x; 
}