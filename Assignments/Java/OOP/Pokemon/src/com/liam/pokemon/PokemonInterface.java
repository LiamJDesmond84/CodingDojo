package com.liam.pokemon;

public interface PokemonInterface {
	
	static Pokemon createPokemon(String name, int health, String type) {
		return AbstractPokemon.createPokemon(name, health, type);
	}
	
	
	static String pokemonInfo(Pokemon pokemon) {
		return "Name: " + pokemon.getName() + ", Health: " + pokemon.getHealth() + ", Type: " + pokemon.getType();
	};
	
	static void listPokemon() {
		System.out.println(Pokedex.myPokemons);
		
	}
	

}
