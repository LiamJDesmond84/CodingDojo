package com.liam.objectmaster;

public class HumanTest {

	public static void main(String[] args) {

//		Human playerOne = new Human();
//		Human playerTwo = new Human();
//		Human playerThree = new Human();
//		
//		playerOne.attack(playerThree);
//		
//		int w = playerTwo.getHealth();
//		System.out.println(w);
//		
//		int x = playerThree.getHealth();
//		System.out.println(x);
		
		Wizard w = new Wizard();
		Ninja n = new Ninja();
		Samurai s = new Samurai();
		Samurai t = new Samurai();
		Samurai u = new Samurai();
		
		w.fireball(n);
		int a = n.getHealth();
		System.out.println(a);
		w.heal(n);
		int e = n.getHealth();
		System.out.println(e);
		
		
		n.steal(s);
		int b = s.getHealth();
		System.out.println(b);
		
		n.runAway();
		int f = n.getHealth();
		System.out.println(f);
		
		t.deathBlow(w);
		int c = w.getHealth();
		System.out.println(c);
		
		t.meditate();
		
		int d = t.getHealth();
		System.out.println(d);
		
		System.out.println(Samurai.howMany());

	}

}
