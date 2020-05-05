function getShortMessage(messages){
    var filteredArray=messages.filter(x=>x.message.length<50);
    console.log(newarray);

    var mappedArray=filteredArray.map(x=>x*2);
    console.log(mappedArray);


}

var messages=[

{
    message:"testing aaaaa"
},

{
    message:'testing bbbbbbbbbbbbbbb'
},
{
    message:'testing ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc'
}

]
getShortMessage(messages);