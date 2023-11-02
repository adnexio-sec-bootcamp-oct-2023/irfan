//recursive fibonacci'
const nTerms = 5;//insert value

for(let i = 0; i < nTerms; i++) {
    console.log(fibonacci(i));
}

function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num - 2);
    }
}

