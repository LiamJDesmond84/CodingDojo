package com.liam.objectmaster;

public class Human {
	
	private String className;
	
	private int strength = 3;
	
	private int stealth = 3;
	
	private int intelligence = 3;
	
	private int health = 100;
	


	public Human(String className) {
		this.className = className;
	}



	public String getClassName() {
		return className;
	}


	public void setClassName(String className) {
		this.className = className;
	}
	
	public int getStrength() {
		return strength;
	}


	public void setStrength(int strength) {
		this.strength = strength;
	}


	public int getStealth() {
		return stealth;
	}


	public void setStealth(int stealth) {
		this.stealth = stealth;
	}


	public int getIntelligence() {
		return intelligence;
	}


	public void setIntelligence(int intelligence) {
		this.intelligence = intelligence;
	}


	public int getHealth() {
		return health;
	}


	public void setHealth(int health) {
		this.health = health;
	}



	public void attack(Human enemy) {
		System.out.println(this.className + " attacks " + enemy.className);
		enemy.health -= this.strength;
	}

}
