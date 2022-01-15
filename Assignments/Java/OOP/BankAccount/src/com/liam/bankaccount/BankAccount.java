package com.liam.bankaccount;

public class BankAccount {

	private double checking;
	private double savings;
	private static int accounts = 0;
	private static double totalAmount;
	
//	public BankAccount() {
//		
//	}

	public BankAccount() {
		this.checking = 100;
		this.savings = 100;
		BankAccount.totalAmount = 200;
		accounts++;
	}

	public double getChecking() {
		return checking;
	}

	public double getSavings() {
		return savings;
	}

	
	public static int howMany() {
		return accounts;
	}
	
	public static double moneyStored() {
		return totalAmount;
	}
	
	public void deposit(double amount, String account) {
		BankAccount.totalAmount += amount;
		if(account == "savings") {
			this.savings += amount;
		}
		else {
			this.checking += amount;
		}

	}
	
	public void widthdraw(double amount, String account) {
		boolean successful = false;
		if(account.equals("savings")) {
			if(this.savings - amount >= 0) {
				successful = true;
				this.savings -= amount;
			}
		}
		else if(account.equals("checking")) {
			if(this.checking - amount >= 0) {
				successful = true;
				this.checking -= amount;
			}
		}
		if(successful) {
			BankAccount.totalAmount -= amount;
		}
			}
		
	
	

	
	public void seeTotal() {
		System.out.println(this.checking + this.savings);
	}

}
