class BankAccount {
    #balance = 0; // Private field
  
    // Getter for balance
    get balance() {
      return this.#balance;
    }
  
    // Setter for balance with validation
    set balance(newBalance) {
      if (newBalance >= 0) {
        this.#balance = newBalance;
      } else {
        console.log('Invalid balance. Please provide a non-negative value.');
      }
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance: ${this.balance}`);
      } else {
        console.log('Invalid deposit amount. Please provide a positive value.');
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawn ${amount}. New balance: ${this.balance}`);
      } else if (amount <= 0) {
        console.log('Invalid withdrawal amount. Please provide a positive value.');
      } else {
        console.log('Insufficient funds for withdrawal.');
      }
    }
  
    viewBalance() {
      console.log(`Current balance: ${this.balance}`);
    }
  }
  

  const myAccount = new BankAccount();
  
  myAccount.deposit(1000);
  myAccount.withdraw(500);
  myAccount.viewBalance();  
  
  // Attempting an invalid transaction
  myAccount.deposit(-200);     
  myAccount.withdraw(1000);     
  
  // Checking balance after invalid transactions
  myAccount.viewBalance();      
  