function processAndSquareNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      try {
        const parsedNumber = parseFloat(numbers[i]);
        if (isNaN(parsedNumber)) {
            throw new Error(`Failed to parse "${numbers[i]}" as a number.`);
        }
        const squaredNumber = parsedNumber ** 2;
            console.log(`Number ${i + 1}: Parsed and squared result:`, squaredNumber);
        } catch (error) {
            console.error(`Error processing number ${i + 1}:`, error.message);
        }
    }
}
  

const inputNumbers = ['2', '3.5', 'abc', '5', '8.2'];
processAndSquareNumbers(inputNumbers);
  