function performDatabaseTask() {
    const connection = openDatabaseConnection();
    try {
        performTaskWithDatabase(connection);
        closeDatabaseConnection(connection);
        console.log('Task completed successfully!');
    } catch (error) {
        closeDatabaseConnection(connection);
        throw error;
    }
}
  
function openDatabaseConnection() {
    console.log('Opening database connection');
    return { /* Database connection object */ };
}
  
function performTaskWithDatabase(connection) {
    console.log('Performing task with database');
    throw new Error('Error during task execution');
}
  
  function closeDatabaseConnection(connection) {
    console.log('Closing database connection');
}

try {
    performDatabaseTask();
} catch (error) {
    console.error('Error:', error.message);
}
  