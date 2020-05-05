/*This time your task is simple.

Given two integers X and K, find the largest number that can be formed by changing digits at atmost K places in the number X.

Input: First line of the input contains two integers X and K separated by a single space.

Output: Print the largest number formed in a single line.

Constraints:
SAMPLE INPUT 
4483 2
SAMPLE OUTPUT 
9983

*/


process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";
 
process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});
 
process.on("SIGINT", function(){
    main(stdin_input);
    process.exit();
});
 
process.stdin.on("end", function () {
   main(stdin_input);
});
 
function main(input) {
    num = input.split(" ")[0];
    k = input.split(" ")[1];
    ans = ""
    var i;
    for(i =0; i<num.length; i++){
        if(k==0)
                break;
        if(num[i]=="9") {
            ans+="9";    
        }else{
            ans+="9";
            k--;
            
        }
        
    }
    ans+=num.slice(i);
    process.stdout.write(ans+"\n"); 
    
}