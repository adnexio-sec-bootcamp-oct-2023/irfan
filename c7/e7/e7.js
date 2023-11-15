function attemptTaskWithFallback() {
    try {
        const result = performTask();
        return result;
    } catch (error) {
        console.error('Error:', error.message);
        return 'DefaultFallbackValue'; //default fallback value here
    }
}
  
function performTask() {
    throw new Error('Error during task execution');
}
  
const result = attemptTaskWithFallback();
console.log('Result:', result);
