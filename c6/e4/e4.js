// Function to double a number
const double = (x) => x * 2;

// Function to increment a number
const increment = (x) => x + 1;

// Function composition
const doubleAndIncrement = (number) => increment(double(number));

// Example usage
const originalNumber = 5;
const result = doubleAndIncrement(originalNumber);

console.log(`Original Number: ${originalNumber}`);
console.log(`Result after doubling and incrementing: ${result}`);
