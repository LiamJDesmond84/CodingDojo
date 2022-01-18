package com.liam.web.pets.models;

public class Dog extends Animal implements AnimalInterface {

	public Dog(String name, String breed, int weight) {
		super(name,breed, weight);
	}
	
	public String showAffection() {
		if (weight > 20) {
			return name + " jumped on your lap, but needs to lose a few lbs";
		}
		else {
			return name + " jumped on your lap";
		}
		
	}
}
