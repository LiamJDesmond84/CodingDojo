package com.liam.web.pets.models;

public class Animal {
	
	protected static String name;
	protected static String breed;
	protected static int weight;
	
	public Animal(String name, String breed, int weight) {

		Animal.name = name;
		Animal.breed = breed;
		Animal.weight = weight;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		Animal.name = name;
	}
	
	public String getBreed() {
		return breed;
	}
	
	public void setBreed(String breed) {
		Animal.breed = breed;
	}
	
	public int getWeight() {
		return weight;
	}
	
	public void setWeight(int weight) {
		Animal.weight = weight;
	}

	
}
