function factorial(n) {
    // Base case: factorial of 0 or 1 is 1
    if (n === 0 || n === 1) {
        return 1;
    }
    // Recursive case: n! = n * (n-1)!
    return n * factorial(n - 1);
}
  
const number = 5;
const result = factorial(number);
  
console.log(`The factorial of ${number} is: ${result}`);
  