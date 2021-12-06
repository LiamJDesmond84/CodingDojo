class User {
    constructor(username, emailAddress) { 
        this.name = username
        this.email = emailAddress
        this.accountBalance = 0
    }
    makeDeposit(amount) {
        this.accountBalance += amount;
    }
    makeWithdrawal(amount) {
        this.accountBalance -= amount;
    }
    displayBalance() {
        console.log(this.accountBalance);
    }
    transferMoney(otherUser, amount) {
        this.accountBalance -= amount;
        otherUser.accountBalance += amount;
    }
}

const guido = new User("Guido van Rossum", "guido@python.com");
const monty = new User("Monty Python", "monty@python.com");
const karl = new User("Karl Pilkington, kpRadio@test.com")

guido.makeDeposit(100)
guido.makeDeposit(100)
guido.makeDeposit(50)
guido.makeWithdrawal(50)

// console.log(guido.accountBalance)


monty.makeDeposit(100)
monty.makeDeposit(50)
monty.makeWithdrawal(10)
monty.makeWithdrawal(20)

console.log(monty.accountBalance)

karl.makeDeposit(500)
karl.makeWithdrawal(200)
karl.makeWithdrawal(50)
karl.makeWithdrawal(50)

// console.log(karl.accountBalance)

guido.transferMoney(karl, 150)

console.log(guido.accountBalance)
console.log(karl.accountBalance)