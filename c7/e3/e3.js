class UserError extends Error {
    constructor(message) {
        super(message);
        this.name = 'UserError';
    }
}
  
function login(username, password) {
    if (username !== 'user' || password !== 'pass') {
        throw new UserError('Incorrect credentials. Please try again.');
    }
    console.log('Login successful!');
}

try {
    login('user', 'wrongpass');
    } catch (error) {
    if (error instanceof UserError) {
        console.error('UserError:', error.message);
    } else {
        console.error('Unexpected error:', error.message);
    }
}
  