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

const karl = new BankAccount(0.01)
const norm = new BankAccount(0.03)

karl.deposit(100).deposit(200).deposit(50).withdraw(100).yieldInterest().displayAccountInfo()

norm.deposit(300).deposit(100).withdraw(50).withdraw(50).withdraw(75).withdraw(20).yieldInterest().displayAccountInfo()