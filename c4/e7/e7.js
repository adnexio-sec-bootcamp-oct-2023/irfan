function logSynchronously(message) {
    console.log(`Synchronous log: ${message}`);
  }
  
  function delayedFunction(delay, message) {
    setTimeout(() => {
      console.log(`Delayed log (${delay} ms): ${message}`);
    }, delay);
  }
  
  logSynchronously('Start of the program');
  
  delayedFunction(0, '0 milliseconds delay');
  delayedFunction(100, '100 milliseconds delay');
  delayedFunction(200, '200 milliseconds delay');
  
  logSynchronously('End of the program');
  