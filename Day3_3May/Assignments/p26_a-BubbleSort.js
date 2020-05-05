function bubble_Sort(a)
{
    var swapp;
    var length = a.length-1;
    var x=a;
    do {
        swapp = false;
        for (var i=0; i < length; i++)
        {
            if (x[i] > x[i+1])
            {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        length--;
    } while (swapp);
 return x; 
}

console.log(bubble_Sort([9,2,24,3,2]));