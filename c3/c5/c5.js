//Handlig Promise Rejection
const myPromise = new Promise((resolve, reject) => {
    reject("This promise has been rejected.");
});
myPromise
    .then((result) => {
        // This part won't be executed in this example
        console.log("Promise resolved: " + result);
    })
    .catch((error) => {
        // Handle the rejection here
        console.error("Promise rejected: " + error);
    });

//Chaining Promises
// Example asynchronous functions
// Example asynchronous functions
function asyncFunction1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("1 second has passed");
            resolve();
        }, 1000);
    });
}
function asyncFunction2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("1 second has passed");
            resolve();
        }, 1000);
    });
}
function asyncFunction3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("1 second has passed");
            resolve();
        }, 1000);
    });
}

asyncFunction1()
    .then((result1) => {
        return asyncFunction2(result1);
    })
    .then((result2) => {
        return asyncFunction3(result2);
    })
    .then((result3) => {
        console.log("All asynchronous functions have completed.");
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });


  