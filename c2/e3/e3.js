//Closure
function createCounter() {  
    let count = 0;  
    return {    
      increment: function() {      
        count++;    
      },    
      getValue: function() {      
        return count;    
      }  
    };
  }
  
  const counter = createCounter();
  counter.increment();
  console.log(counter.getValue());  // Output: 1
  