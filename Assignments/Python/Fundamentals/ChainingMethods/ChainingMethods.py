
class User:
    bank_name = "First National Dojo"
    def __init__(self, name, email_address):
        self.name = name
        self.email = email_address
        self.account_balance = 500
    def make_deposit(self, amount):
        self.account_balance += amount
        return self
    def make_withdrawal(self, amount):
        self.account_balance -= amount
        return self
    def display_user_balance(self):
        print(f"{self.name} has {self.account_balance} dollars")
        return self
    def  transfer_money(self, other_user, amount):
        self.account_balance -= amount
        other_user.account_balance += amount
        return self



guido = User("Guido van Rossum", "guido@python.com")
monty = User("Monty Python", "monty@python.com")
liam = User("Liam Desmond", "CodingDojo@test.com")

guido.make_deposit(100).make_deposit(150).make_deposit(50).make_withdrawal(100).display_user_balance()
monty.make_deposit(400).make_deposit(100).make_withdrawal(200).make_withdrawal(50).display_user_balance()
liam.make_deposit(800).make_withdrawal(100).make_withdrawal(50).make_withdrawal(200).display_user_balance()
guido.transfer_money(liam, 200).display_user_balance()
liam.display_user_balance()