

class Animal:
    def __init__(self, position, name):
        self.name = name
        self.position = position
        self.animals = []
        self.Zooname = "San Diego Zoo"
    def add_lion(self, animal):
        self.animals.append(animal)
    def add_tiger(self, animal):
        self.animals.append(animal)
    def add_bear(self, animal):
        self.animals.append(animal)
    def print_all_info(self):
        print(wrangler.animals[0].name)
        print(wrangler.animals[1].name)
        print(wrangler.animals[2].name)
        for animal in self.animals:
            print("-"*30, animal.name, "-"*30)
            print(animal.health)
            print(animal.happiness)
            print(animal.health)

class Lion(Animal):
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.health = 100
        self.happiness = 50
        self.noise = "Roar"
    def feed(self):
        self.happiness += 20
    def exercise(self):
        self.health += 30
    def play(self):
        self.happiness += 10
        self.health += 10
        print("-"*60)
        print(self.name + " is Playing!")
        print(self.noise)
        print("-"*60)

class Tiger(Animal):
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.health = 100
        self.happiness = 50
        self.noise = "Meow"
    def feed(self):
        self.happiness += 20
    def exercise(self):
        self.health += 30
    def play(self):
        self.happiness += 10
        self.health += 10
        print("-"*60)
        print(self.name + " is Playing!")
        print(self.noise)
        print("-"*60)

class Bear(Animal):
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.health = 100
        self.happiness = 50
        self.noise = "Grrrr"
    def feed(self):
        self.happiness += 20
    def exercise(self):
        self.health += 30
    def play(self):
        self.happiness += 10
        self.health += 10
        print("-"*60)
        print(self.name + " is Playing!")
        print(self.noise)
        print("-"*60)

wrangler = Animal("Wrangler", "Liam")
lion1 = Lion("Bob", 12)
tiger1 = Tiger("Sam", 8)
bear1 = Bear("Billy", 18)

wrangler.add_lion(lion1)
wrangler.add_tiger(tiger1)
wrangler.add_bear(bear1)

lion1.feed()
bear1.exercise()
tiger1.play()
wrangler.print_all_info()