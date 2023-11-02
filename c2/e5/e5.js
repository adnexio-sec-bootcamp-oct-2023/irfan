//IIFE
var x = 5;

(function() {  
    var factorial = 1;
    for (var i = x; i > 0 ; i--) {    
        factorial *= i;
    }
    console.log(factorial);  
  })();  
  

  
  