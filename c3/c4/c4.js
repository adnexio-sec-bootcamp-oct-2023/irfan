//class method (Calculation)
class Calculator{
    add(a,b){
        return a + b;
    }
    subtract(a,b){
        return a - b;
    }
    multiply(a,b){
        return a * b;
    }
    divide(a,b){
        return a / b;
    }
}

const calculator = new Calculator();

const result1 = calculator.add(1,2);
console.log('Result of addition is ' + result1);

const result2 = calculator.subtract(2,3);
console.log('Result of subtraction is ' + result2);

const result3 = calculator.multiply(3,4);
console.log('Result of multiplication is ' + result3);

const result4 = calculator.divide(4,5);
console.log('Result of division is ' + result4);
