//arrow function with no arguement
const sayMyName = () => "I am Irfan Muhaimin";
console.log(sayMyName());

//arrow function with a single argument
const areaSquare = (a) => a * a;
console.log(areaSquare(4));

//arrow function as a callback
const numbers = [1, 2, 3, 4, 5];
const areaForSquare = numbers.map((x) => x * x);
console.log(areaForSquare);

//arrow function in a high-order function
const bills = [1.0, 1.5, 5.5, 0.5, 0.5];
const sumOfBills = bills.reduce((x, y) => x + y, 0);
console.log(sumOfBills)