var x=100; //global
function varDemo(){
    console.log("x ben trong ham",x);
}
//
console.log("x ben ngoai ham",x);
// thực thi hàm:
varDemo();


//local
function fn_demo(){
    var y=200; //local 
    console.log("y ben trong han",y);
}
fn_demo();
console.log("y ben ngoai ham",y);// === error
//
 

 