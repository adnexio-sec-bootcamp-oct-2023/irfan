function simulateRandomApiCall() {
    return new Promise((resolve, reject) => {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        // Simulate a successful API response
        setTimeout(() => resolve('API call succeeded'), 1000);
      } else {
        // Simulate an API error
        setTimeout(() => reject('API call failed'), 1000);
      }
    });
  }
  
  async function fetchData() {
    try {
      const result = await simulateRandomApiCall();
      console.log('Data received:', result);
    } catch (error) {
      console.error('Error occurred:', error);
    }
  }
  
  fetchData();
  