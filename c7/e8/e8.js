class ValidationError extends Error {
    constructor(message, statusCode, userMessage) {
      super(message);
      this.name = 'ValidationError';
      this.statusCode = statusCode || 400; // Default status code is 400 Bad Request
      this.userMessage = userMessage || 'Validation error occurred.';
    }
  }
  
  // Example usage:
  try {
    // Simulating a validation error
    throw new ValidationError('Invalid input data.', 422, 'Please check your input data.');
  } catch (error) {
    if (error instanceof ValidationError) {
      console.error('ValidationError:', error.message);
      console.error('Status Code:', error.statusCode);
      console.error('User Message:', error.userMessage);
    } else {
      // Handle other types of errors if needed
      console.error('Unexpected error:', error.message);
    }
  }
  