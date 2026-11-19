// Q7 - Banking Application with private fields

class BankAccount {
  #balance; // private field, cannot be accessed outside the class

  constructor(initialBalance = 0) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Deposit amount must be greater than 0.");
    }
    this.#balance += amount;
    console.log(`Deposited Rs. ${amount}. New balance: Rs. ${this.#balance}`);
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Withdrawal amount must be greater than 0.");
    }
    if (amount > this.#balance) {
      throw new Error(`Insufficient balance. Available: Rs. ${this.#balance}, requested: Rs. ${amount}`);
    }
    this.#balance -= amount;
    console.log(`Withdrew Rs. ${amount}. New balance: Rs. ${this.#balance}`);
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount(1000);
console.log("Starting balance:", account.getBalance());

// valid deposits
account.deposit(500);
account.deposit(250);

// valid withdrawal
account.withdraw(300);

// invalid withdrawal (more than balance) handled with try/catch
try {
  account.withdraw(5000);
} catch (error) {
  console.log("Error:", error.message);
}

// invalid deposit
try {
  account.deposit(-100);
} catch (error) {
  console.log("Error:", error.message);
}

console.log("Final balance:", account.getBalance());

// trying to touch the private field directly doesn't work
console.log("Direct access to balance:", account.balance); // undefined
