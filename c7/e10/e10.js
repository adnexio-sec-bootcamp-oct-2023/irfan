function processAndRethrowError() {
    try {
      // Simulating an error during some process
      throw new Error('An error occurred during processing.');
    } catch (error) {
      // Log specific details for debugging
      console.error('Error Details:');
      console.error('Message:', error.message);
      console.error('Stack Trace:', error.stack);
  
      // Re-throw the error to be handled by a higher-level function
      throw error;
    }
  }
  
  try {
    processAndRethrowError();
  } catch (error) {
    console.error('Error caught at a higher level:', error.message);
  }
  