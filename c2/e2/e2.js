//global variable
let globalVar = "I am global!";

//function scopeTest
function scopeTest(){
    let localVar = "I am local!";   //local variable
    console.log(localVar);
}

console.log(globalVar); //access the global variable
scopeTest();            //access the local variable
