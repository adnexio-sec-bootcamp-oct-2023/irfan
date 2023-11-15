// Non-curried multiplication function
function multiply(a, b) {
    return a * b;
}
  
// Curried multiplication function
function curryMultiply(a) {
    return function(b) {
        return a * b;
    };
}
  
// Example usage of the non-curried function
const resultNonCurried = multiply(4, 5);
console.log('Non-curried result:', resultNonCurried); 
  
// Example usage of the curried function
const curriedMultiply = curryMultiply(4);
const resultCurried = curriedMultiply(5);
console.log('Curried result:', resultCurried);
  