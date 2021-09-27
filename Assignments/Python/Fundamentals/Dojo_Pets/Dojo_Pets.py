class Pet():
    def __init__(self, name, noise, type, tricks):
        self.name = name
        self.noise = noise
        self.type = type
        self.tricks = tricks
        self.health = 50
        self.energy = 10
    def sleep(self, other_user):
        other_user.energy += 25
    def eat(self, other_user):
        other_user.energy += 5
        other_user.health += 10
    def play(self, other_user):
        other_user.health += 5
    def noise(self, other_user):
        print(other_user.noise)

class Ninja(Pet):
    def __init__(self, first_name, last_name, treats, pet_food, pet):
        self.first_name = first_name
        self.last_name = last_name
        self.treats = treats
        self.pet_food = pet_food
        self.pet = pet
    def walk(self, pet):
        super().play(pet)
    def feed(self, pet):
        super().eat(pet)
    def bathe(self, pet):
        super().noise(pet)
    def status(self, pet):
        print(f"{pet.name} has {pet.energy} energy")
        print(f"{pet.name} has {pet.health} health")
        print(f"{pet.name} is {pet.tricks}")



liam = Ninja("Liam", "Desmond","catnip", "Meow-Mix", "Frisky")

frisky = Pet("Frisky", "Meow", "Tabby", "playing dead")

liam.feed(frisky)
liam.walk(frisky)
liam.status(frisky)
liam.bathe(frisky)