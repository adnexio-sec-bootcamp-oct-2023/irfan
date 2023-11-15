class BankAccount {
    #balance = 0; 
  
    #validateAmount(amount) {
      if (isNaN(amount) || amount <= 0) {
        throw new Error('Invalid amount. Please enter a positive number.');
      }
    }
  
    #validateWithdrawal(amount) {
      if (amount > this.#balance) {
        throw new Error('Insufficient funds for withdrawal.');
      }
    }
  
    deposit(amount) {
      this.#validateAmount(amount);
      this.#balance += amount;
      console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
    }
  
    withdraw(amount) {
      this.#validateAmount(amount);
      this.#validateWithdrawal(amount);
      this.#balance -= amount;
      console.log(`Withdrawn ${amount}. New balance: ${this.#balance}`);
    }
  
    viewBalance() {
      console.log(`Current balance: ${this.#balance}`);
    }
  }
  
  const myAccount = new BankAccount();
  myAccount.deposit(1000);      // Output: Deposited 1000. New balance: 1000
  myAccount.withdraw(500);      // Output: Withdrawn 500. New balance: 500
  myAccount.viewBalance();      // Output: Current balance: 500

  