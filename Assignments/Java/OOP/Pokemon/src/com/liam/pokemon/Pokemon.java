package com.liam.pokemon;

public class Pokemon {
	
	public static int count = 0;
	
	private String name;
	
	private int health;
	
	private String type;
	
	
	
	
	public Pokemon(String name, int health, String type) {
		count++;
		this.name = name;
		this.health = health;
		this.type = type;
	}
	



	public void attackPokemon(Pokemon pokemon) {
		pokemon.health -= 10;
	}


	public static int getCount() {
		return count;
	}


	public static void setCount(int count) {
		Pokemon.count = count;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public int getHealth() {
		return health;
	}


	public void setHealth(int health) {
		this.health = health;
	}


	public String getType() {
		return type;
	}


	public void setType(String type) {
		this.type = type;
	}
	
	

}
