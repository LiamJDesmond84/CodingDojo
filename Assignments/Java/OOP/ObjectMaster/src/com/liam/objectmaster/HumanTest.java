package com.liam.objectmaster;

public class HumanTest {

	public static void main(String[] args) {

		Human playerOne = new Human("Wizard");
		Human playerTwo = new Human("Ninja");
		Human playerThree = new Human("Samurai");
		
		playerOne.attack(playerThree);
		
		int w = playerTwo.getHealth();
		System.out.println(w);
		
		int x = playerThree.getHealth();
		System.out.println(x);
		

	}

}
