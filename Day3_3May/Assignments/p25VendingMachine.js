const prompt=require('prompt-sync')();
var notes=[1,2,5,10,20,50,100,200,2000];

function change()
{
    var change=250;
    var found =0;

    //change=prompt('Enter the cash to get a change');
    while(change!=0){
        found=notes.find(function(element){
            return element<=change;
        })
        change-=found;
    }

}

console.log(change(notes));