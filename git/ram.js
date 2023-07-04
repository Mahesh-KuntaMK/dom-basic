//closures 
function x(){
    let a=7;
  return   function y(){
        let a=8;
        console.log(a);
    } 
   //return y; are both same;
}
var z=x();
console.log(z);
//suppose thound of lines
z();