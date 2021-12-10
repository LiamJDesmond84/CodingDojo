class BankAccount {
    constructor(intRate, balance) {
        this.intRate = intRate;
        this.balance = 0;
    }
    deposit(amount) {
        this.balance += amount;
        return this;
    }
    withdraw(amount) {
        this.balance -= amount;
        return this;
    }
    displayAccountInfo() {
        console.log(this.balance);
        return this;
    }
    yieldInterest(intRate) {
        this.balance += this.intRate;
        return this;
    }
}

class User {
    constructor(username, emailAddress) { 
        this.name = username
        this.email = emailAddress
        this.account = new BankAccount(intRate=0.02, balance=0);
    }
    makeDeposit(amount) {
        this.account.deposit(amount);
        return this;
    }
    makeWithdrawal(amount) {
        this.account.withdraw(amount);
        return this;
    }
    displayBalance() {
        console.log(this.account.balance);
        return this;
    }
    transferMoney(otherUser, amount) {
        this.account.withdraw(amount);
        otherUser.account.deposit(amount);
        return this;
    }
}


// const account1 = new BankAccount(intRate=0.02, balance=100);
// const account2 = new BankAccount(balance=100, intRate=0.02);

const account1 = new BankAccount(0.02, 100);
const account2 = new BankAccount(100, 0.02);


account1.makeDeposit(100).displayBalance();
