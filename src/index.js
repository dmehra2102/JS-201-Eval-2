
// Problem 1. 

class Animal {
    constructor(name, type) {
      this.name = name;
      this.type = type;
    }
  
    makeSound() {
      return "Animal is making a sound";
    }
  }
  
  // Level 2
  class Mammal extends Animal {
    constructor(name, type, hasFur) {
      super(name, type);
      this.hasFur = hasFur;
    }
  
    makeSound() {
      return "Mammal is making a sound";
    }
  }
  
  // Level 3
  class Dog extends Mammal {
    constructor(name, type, hasFur, breed) {
      super(name, type, hasFur);
      this.breed = breed;
    }
  
    makeSound() {
      return "Woof Woof!";
    }
  }


//   Problem 2


class Character {
    constructor(name,health,attackPower){
        this.name = name;
        this.health= health;
        this.attackPower = attackPower;
        this.attack = function(obj){
            obj.health -= this.attackPower;
        }
        this.isAlive = function(){
            return this.health>0;
        }
    }
}

class Warrior extends Character {
    constructor(name,health,attackPower,weapon,armor){
        super(name,health,attackPower);
        this.weapon = weapon;
        this.armor= armor;
        this.attack = function(obj){
            if(weapon==="sword"){
                obj.health -= this.attackPower + 10;
            }else{
                obj.health -= this.attackPower;
            }
        }
        this.defend = function(){
            this.health += 10;
        }
    }
}

let character = new Character("John", 100, 20);
let enemy = new Character("Enemy", 100, 20);
let warrior = new Warrior("John", 100, 20, "sword", 30);

// console.log(enemy.health); // 100
// character.attack(enemy);
// character.attack(enemy);
// console.log(enemy.health); // 60
// warrior.attack(enemy);
// console.log(enemy.health); // 30

// console.log(warrior.health); // 100
// warrior.defend();
// console.log(warrior.health); // 110

// console.log(enemy.isAlive()); // true
// enemy.health = 0;
// console.log(enemy.isAlive()); // false

export { Dog, Mammal, Animal, Character, Warrior }
