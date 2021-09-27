


class BankAccount:
    bank_name = "First National Dojo"
    all_accounts = []
    
    
    def __init__(self, name):
        self.name = name
        self.interest_rate = 0.01
        self.balance = 0
        BankAccount.all_accounts.append(self)
    def deposit(self, amount):
        self.balance += amount
        return self
    def withdraw(self, amount):
        self.balance -= amount
        return self
    def display_account_info(self):
        print(f"{self.name} has {self.balance} dollars")
        return self
    def yield_interest(self):
        self.balance += self.interest_rate
        return self
    @classmethod
    def show_bank_name(cls):
        print(f"{cls.bank_name}")
        return cls
    @classmethod
    def show_bank_accounts(cls):
        for account in cls.all_accounts:
            print(f"{account.name}")
            # print(cls.all_accounts)
            return cls
        


liam = BankAccount(name="Liam Desmond")
bob = BankAccount(name="Bob Smith")

liam.deposit(100).deposit(200).deposit(500).withdraw(400).yield_interest().display_account_info()
bob.deposit(800).deposit(400).withdraw(50).withdraw(25).withdraw(35).withdraw(100).yield_interest().display_account_info()
BankAccount.show_bank_name().show_bank_accounts()
