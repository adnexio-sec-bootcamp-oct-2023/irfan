//promise
//implement a fake API using setTimeout
function fakeAPICall() {
    return new Promise((resolve, reject) => {
        // Simulate a delay for the API call (e.g., 1-2 seconds)
        const delay = Math.random() * 1000 + 1000;
        
        setTimeout(() => {
            if (Math.random() <  1.5) {
                // Simulate a successful response (50% success rate)
                const data = { id: 1, name: "John Wick" };
                resolve(data);
            }else {
                // Simulate an error response (30% error rate)
                reject(new Error("Failed to fetch user data"));
            }
        }, delay);
    });
}

// Usage example:
fakeAPICall()
    .then((data) => {
        console.log("API call successful:", data);
    })
    .catch((error) => {
        console.error("API call failed:", error.message);
    });
