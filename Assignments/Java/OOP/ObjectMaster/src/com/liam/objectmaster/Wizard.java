package com.liam.objectmaster;

public class Wizard extends Human {
	

	private int intelligence = 8;
	
	
	
	public Wizard() {
		this.health = 50;
	}



	public void setHealth(int health) {
		this.health = health;
	}

	public int getIntelligence() {
		return intelligence;
	}

	public void setIntelligence(int intelligence) {
		this.intelligence = intelligence;
	}

	public void heal(Human otherPlayer) {
		otherPlayer.health += this.intelligence;
	}
	
	public void fireball(Human otherPlayer) {
		otherPlayer.health -= this.intelligence * 3;
	}

}
