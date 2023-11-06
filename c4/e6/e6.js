// Simulated API endpoints as promises
function fetchAPI(endpoint) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Data from ${endpoint}`);
      }, Math.random() * 3000);
    });
  }
  
  async function fetchAndProcessAPIs() {
    const endpoints = ['endpoint1', 'endpoint2', 'endpoint3'];
  
    try {
      const apiPromises = endpoints.map(fetchAPI);
      const results = await Promise.all(apiPromises);
      
      results.forEach((data, index) => {
        console.log(`Received data from ${endpoints[index]}: ${data}`);
      });
  
      console.log('All API requests have been processed');
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  
  fetchAndProcessAPIs();