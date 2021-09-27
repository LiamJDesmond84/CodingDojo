import random
from classes.ninja import Ninja
from classes.pirate import Pirate

michelangelo = Ninja("Michelanglo")
jack_sparrow = Pirate("Jack Sparrow")
jack_sparrow.show_stats()
michelangelo.show_stats()

rand1 = [michelangelo.attack(jack_sparrow), michelangelo.ninja_star(jack_sparrow),michelangelo.smoke_bomb(jack_sparrow),jack_sparrow.attack(michelangelo), jack_sparrow.slice(michelangelo),jack_sparrow.peg_leg_kick(michelangelo)]


Player_one_is_alive = True
Player_two_is_alive = True
jack_sparrow.health = 100
michelangelo.health = 100

def battle():
    rand1 = [michelangelo.attack(jack_sparrow), michelangelo.ninja_star(jack_sparrow),michelangelo.smoke_bomb(jack_sparrow),jack_sparrow.attack(michelangelo), jack_sparrow.slice(michelangelo),jack_sparrow.peg_leg_kick(michelangelo)]
    Player_one_is_alive = True
    Player_two_is_alive = True
    Go = input("Michelangelo, how would you like to attack?  Your options are attack, ninja star, smoke bomb & random.  ")
    if Go == "attack":
        michelangelo.attack(jack_sparrow)
        if not jack_sparrow.health <= 0:
            jack_sparrow.show_stats()
            battle2()
        if jack_sparrow.health <= 0:
            Player_two_is_alive = False
            print("MICHELANGELO WINS!!!!!!!")
            jack_sparrow.show_stats()
        
            
    if Go == "ninja star":
        michelangelo.ninja_star(jack_sparrow)
        if not jack_sparrow.health <= 0:
            jack_sparrow.show_stats()
            battle2()
        if jack_sparrow.health <= 0:
            Player_two_is_alive = False
            print("MICHELANGELO WINS!!!!!!!")
            jack_sparrow.show_stats()
    if Go == "smoke bomb":
        michelangelo.smoke_bomb(jack_sparrow)
        if not jack_sparrow.health <= 0:
            jack_sparrow.show_stats()
            battle2()
        if jack_sparrow.health <= 0:
            Player_two_is_alive = False
            print("MICHELANGELO WINS!!!!!!!")
            jack_sparrow.show_stats()
    # if Go == "random":
    #     jack_sparrow.health = 100
    #     michelangelo.health = 100
    #     jack_sparrow.show_stats()
    #     while Player_two_is_alive and Player_one_is_alive:
    #         random.randint(0,len(rand1)-1)
    #         if jack_sparrow.health <= 0:
    #             Player_two_is_alive = False
    #             print("MICHELANGELO WINS!!!!!!!")
    #             jack_sparrow.show_stats()
    #             break
    #         if michelangelo.health <= 0:
    #             Player_one_is_alive = False
    #             print("JACK SPARROW WINS!!!!!!!!!")
    #             michelangelo.show_stats()
    #             break



rand1 = [michelangelo.attack(jack_sparrow), michelangelo.ninja_star(jack_sparrow),michelangelo.smoke_bomb(jack_sparrow),jack_sparrow.attack(michelangelo), jack_sparrow.slice(michelangelo),jack_sparrow.peg_leg_kick(michelangelo)]

def battle2():
    rand1 = [michelangelo.attack(jack_sparrow), michelangelo.ninja_star(jack_sparrow),michelangelo.smoke_bomb(jack_sparrow),jack_sparrow.attack(michelangelo), jack_sparrow.slice(michelangelo),jack_sparrow.peg_leg_kick(michelangelo)]
    Player_one_is_alive = True
    Player_two_is_alive = True
    Go = input("Jack Sparrow, how would you like to attack?  Your options are attack, slice, peg leg kick & random.  ")
    if Go == "attack":
        jack_sparrow.attack(michelangelo)
        if not michelangelo.health <= 0:
            michelangelo.show_stats()
            battle()
        battle()
        if michelangelo.health <= 0:
            Player_one_is_alive = False
            print("JACK SPARROW WINS!!!!!!!!!")
            michelangelo.show_stats()
    if Go == "slice":
        jack_sparrow.slice(michelangelo)
        if not michelangelo.health <= 0:
            michelangelo.show_stats()
            battle()
        if michelangelo.health <= 0:
            Player_one_is_alive = False
            print("JACK SPARROW WINS!!!!!!!!!")
            michelangelo.show_stats()
    if Go == "peg leg kick":
        jack_sparrow.peg_leg_kick(michelangelo)
        if not michelangelo.health <= 0:
            michelangelo.show_stats()
            battle()
        if michelangelo.health <= 0:
            Player_one_is_alive = False
            print("JACK SPARROW WINS!!!!!!!!!")
            michelangelo.show_stats()
    # if Go == "random":
    #     jack_sparrow.health = 100
    #     michelangelo.health = 100
    #     michelangelo.show_stats()
    #     while Player_one_is_alive and Player_two_is_alive:
    #         random.randint(0,len(rand1)-1)
    #         if michelangelo.health <= 0:
    #             Player_one_is_alive = False
    #             print("JACK SPARROW WINS!!!!!!!!!")
    #             michelangelo.show_stats()
    #             break
    #         if jack_sparrow.health <= 0:
    #             Player_two_is_alive = False
    #             print("MICHELANGELO WINS!!!!!!!")
    #             jack_sparrow.show_stats()
    #             break

battle2()