
class User:
    bank_name = "First National Dojo"
    def __init__(self, name, email_address):
        self.name = name
        self.email = email_address
        self.account_balance = 500
    def make_deposit(self, amount):
        self.account_balance += amount
    def make_withdrawal(self, amount):
        self.account_balance -= amount
    def display_user_balance(self):
        print(f"{self.name} has {self.account_balance} dollars")
    def  transfer_money(self, other_user, amount):
        self.account_balance -= amount
        other_user.account_balance += amount



guido = User("Guido van Rossum", "guido@python.com")
monty = User("Monty Python", "monty@python.com")
liam = User("Liam Desmond", "CodingDojo@test.com")

guido.make_deposit(100)
guido.make_deposit(150)
guido.make_deposit(50)
guido.make_withdrawal(100)
guido.display_user_balance()

monty.make_deposit(400)
monty.make_deposit(100)
monty.make_withdrawal(200)
monty.make_withdrawal(50)
monty.display_user_balance()

liam.make_deposit(800)
liam.make_withdrawal(100)
liam.make_withdrawal(50)
liam.make_withdrawal(200)
liam.display_user_balance()

guido.transfer_money(liam, 200)
guido.display_user_balance()
liam.display_user_balance()