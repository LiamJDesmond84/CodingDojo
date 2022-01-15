package com.liam.objectmaster;

public class Samurai extends Human {
	

	private static int samuraiCount = 0;
	
	

	public Samurai() {
		this.health = 200;
		samuraiCount++;
	}
	


	
	public void deathBlow(Human otherPlayer) {
		this.health /= 2;
		otherPlayer.health = 0;
	}
	
	public void meditate() {
		this.health += (this.health/2);
	}
	
	public static int howMany() {
		return samuraiCount;
	}
}
