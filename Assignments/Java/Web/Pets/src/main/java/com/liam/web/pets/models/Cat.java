package com.liam.web.pets.models;

public class Cat extends Animal implements AnimalInterface {
	
	public Cat(String name, String breed, int weight) {
		super(name,breed, weight);
	}
	
	public String showAffection() {
		return AnimalInterface.showAffection();
	}

}
