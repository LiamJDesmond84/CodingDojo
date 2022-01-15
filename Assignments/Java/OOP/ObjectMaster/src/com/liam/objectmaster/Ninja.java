package com.liam.objectmaster;

public class Ninja extends Human {
	
	private int stealth = 10;
	
	
	
	public Ninja() {
		this.stealth = 10;
	}

	

	public void setStealth(int stealth) {
		this.stealth = stealth;
	}

	public void steal(Human otherPlayer) {
		otherPlayer.health -= this.stealth;
		this.health += this.stealth;
	}

	public void runAway() {
		this.health -= 10;
	}

}
