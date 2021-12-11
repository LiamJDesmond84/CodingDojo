// parent Vehicle class
class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(this.name);
        return this;
    }
    // simple method in the parent class
    showStats() {
        console.log(this.name);
        console.log(this.health);
        console.log(this.speed);
        console.log(this.strength);
        return this;
    }
    drinkSake() {
        this.health += 10
        return this;
    }
}
const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName().drinkSake().showStats();
