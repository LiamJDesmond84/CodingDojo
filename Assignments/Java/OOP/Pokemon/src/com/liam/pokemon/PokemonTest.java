package com.liam.pokemon;

public class PokemonTest {

	public static void main(String[] args) {

		
		Pokemon a = new Pokemon("Al", 100, "Fire");
		Pokemon b = new Pokemon("Bob", 100, "Water");
		Pokemon c = new Pokemon("Chuck", 100, "Earth");
		Pokemon d = new Pokemon("Donald", 100, "Wind");

		
		a.attackPokemon(d);
		
		PokemonInterface.listPokemon();
		String x = PokemonInterface.pokemonInfo(d);
		Pokemon e = PokemonInterface.createPokemon("Test", 100, "Tester");
		String y = PokemonInterface.pokemonInfo(e);
		
		System.out.println(y);
		System.out.println(x);

	}

}
