const promises = [
    () => new Promise(resolve => setTimeout(() => resolve('One'), 2000)),
    () => new Promise(resolve => setTimeout(() => resolve('Two'), 4000)),
    () => new Promise(resolve => setTimeout(() => resolve('Three'), 6000)),
  ];
  
  function executeSequentially(promises) {
    return promises.reduce((promiseChain, currentPromise) => {
      return promiseChain.then(chainResults =>
        currentPromise().then(currentResult => {
          logMessage(currentResult);
          return [...chainResults, currentResult];
        })
      );
    }, Promise.resolve([]));
  }
  
  function logMessage(message) {
    console.log(message);
  }
  
  executeSequentially(promises).then(() => {
    console.log('All promises have resolved');
  });
