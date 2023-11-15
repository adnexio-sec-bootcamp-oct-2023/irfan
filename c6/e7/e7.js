function timesThree(innerFunction) {
    innerFunction();
    innerFunction();
    innerFunction();
}
  
function printHello() {
    console.log('Hello!');
}
  
timesThree(printHello);
  