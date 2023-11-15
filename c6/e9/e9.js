function counter() {
    let count = 0;
  
    // The returned function is a closure, capturing the `count` variable
    return function() {
        count += 1;
        return count;
    };
}
  
const incrementCounter = counter();
console.log(incrementCounter()); // Output: 1
console.log(incrementCounter()); // Output: 2
console.log(incrementCounter()); // Output: 3
  