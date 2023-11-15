function divide(a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero.');
    }
    return a / b;
}
  
function divideAndHandleErrors(a, b) {
    try {
        const result = divide(a, b);
            console.log(`Result of ${a} divided by ${b}:`, result);
        return result;
        } catch (error) {
            console.error('Error:', error.message);
    }
}
  
divideAndHandleErrors(10, 2);   // Output: Result of 10 divided by 2: 5
divideAndHandleErrors(8, 0);    // Output: Error: Cannot divide by zero.
  