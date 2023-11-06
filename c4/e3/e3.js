//promise
function processData(numbers) {
    return new Promise((resolve, reject) =>{
    const doubledArray = numbers.map((num) => num * 2);
    if (doubledArray)   {
        resolve(doubledArray);
    } else {
        reject("Error");
    }
    });
}

// Function to calculate the sum of numbers in an array
function sum(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

const numbers = [1, 2, 3, 4, 5];

// Double the numbers using processData and calculate the sum using sum as a callback
processData(numbers)
    .then((doubledArray) => {
    const totalSum = sum(doubledArray);
    console.log("Double the numbers in Array:", doubledArray);
    console.log("Total Sum of all Array:", totalSum);
    })
    .catch((error) => {
        console.log(error);
}); 
