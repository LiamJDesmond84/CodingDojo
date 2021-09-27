class BankAccount:
    bank_name = "First National Dojo"
    all_accounts = []
    
    
    def __init__(self,int_rate,balance):
        self.int_rate = int_rate
        self.balance = balance
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
        self.balance += self.int_rate
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

class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccount(int_rate=0.02, balance=0)	# added this line
        self.myaccount = 5000
    def example_method(self):
        # we can call the BankAccount instance's methods
        self.account.deposit(100)
        # or access its attributes
        print(self.account.balance)
        return self
    def make_deposit(self,amount):
        #if the user wants to deposit the 200 straight into BankAccount then leave argument at 0.  Otherwise, specified argument will be added.
        if amount == 0:
            self.account.deposit(200)
        else:
            self.myaccount += amount
        return self
    def make_withdrawal(self,amount):
        #if the user wants to withraw the 50 straight from BankAccount then leave argument at 0.  Otherwise, specified argument will be subtracted.
        if amount == 0:
            self.account.withdraw(50)
        else:
            self.myaccount -= amount
        return self
    def display_balance(self):
        print(f"{self.name} has {self.account.balance} in BankAccount")
        print(f"{self.name} has {self.myaccount} in his personal account")
        return self



joe = User("Joe Blow", "JBlow@test.com")
joe.make_deposit(0).make_withdrawal(42).display_balance()