//closures 
function x(){
    var a=7;
    function y(){
        //let a=8;
        console.log(a);//references to vaiable will accessed
    } 
    a=100;
   return y
}
var z=x();
console.log(z);
//suppose thound of lines
z();//output is 100 cause the closure giving because the final reference of a points 100;