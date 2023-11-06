// Function with a callback pattern
function fetchDataWithCallback(data, callback) {
    setTimeout(() => {
      if (data) {
        callback(null, `Data received: ${data}`);
      } else {
        callback('Error: No data provided', null);
      }
    }, 1000);
  }
  
  // Function that returns a Promise by wrapping the callback function
  function fetchDataWithPromise(data) {
    return new Promise((resolve, reject) => {
      fetchDataWithCallback(data, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }
  
  // Using the original callback pattern
  fetchDataWithCallback('Sample Data', (error, result) => {
    if (error) {
      console.error(error);
    } else {
      console.log(result);
    }
  });
  
  // Using the promise pattern
  fetchDataWithPromise('Sample Data')
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error(error);
    });
  