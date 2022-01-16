package com.liam.pokemon;

public abstract class AbstractPokemon implements PokemonInterface {
	
	public static Pokemon createPokemon(String name, int health, String type) {
		return new Pokemon(name, health, type);
	}
	
	public abstract String pokemonInfo(Pokemon pokemon);

}
