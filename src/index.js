
// Problem 1. 
function Animal(name, type) {
  this.name = name;
  this.type = type;
}

Animal.prototype.makeSound = ()=>{
  return "Animal is making a sound";
}

function Mammal(name, type, hasFur) {
  Animal.call(this,name,type);
  this.hasFur = hasFur;
  this.makeSound = ()=>{ 
      return "Mammal is making a sound";
  }
}

Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.constructor= Mammal;


function Dog(name, type, hasFur, breed) {
  Mammal.call(this,name,type,hasFur);
  this.breed = breed;
  this.makeSound = ()=> {
      return "Woof Woof!";
  }
}


Dog.prototype = Object.create(Mammal.prototype);
Dog.prototype.constructor = Dog;


let d = new Dog("Fido", "dog", true, "Labrador");
console.log(d.makeSound()); // "Woof Woof!"

let m = new Mammal("Fluffy", "mammal", true);
console.log(m.makeSound()); // "Mammal is making a sound"

let a = new Animal("Charlie", "animal");
console.log(a.makeSound()); // "Animal is making a sound"


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

// let character = new Character("John", 100, 20);
// let enemy = new Character("Enemy", 100, 20);
// let warrior = new Warrior("John", 100, 20, "sword", 30);

export { Dog, Mammal, Animal, Character, Warrior }
