class User {
    constructor(username, emailAddress) { 
        this.name = username
        this.email = emailAddress
        this.accountBalance = 0
    }
    makeDeposit(amount) {
        this.accountBalance += amount;
        return this;
    }
    makeWithdrawal(amount) {
        this.accountBalance -= amount;
        return this;
    }
    displayBalance() {
        console.log(this.accountBalance);
        return this;
    }
    transferMoney(otherUser, amount) {
        this.accountBalance -= amount;
        otherUser.accountBalance += amount;
        return this;
    }
}

const guido = new User("Guido van Rossum", "guido@python.com");
const monty = new User("Monty Python", "monty@python.com");
const karl = new User("Karl Pilkington, kpRadio@test.com")

guido.makeDeposit(100).makeDeposit(100).makeDeposit(50).makeWithdrawal(50).displayBalance()

monty.makeDeposit(100).makeDeposit(50).makeWithdrawal(10).makeWithdrawal(20).displayBalance()

karl.makeDeposit(500).makeWithdrawal(200).makeWithdrawal(50).makeWithdrawal(50).displayBalance()

guido.transferMoney(karl, 150).displayBalance()

karl.displayBalance()