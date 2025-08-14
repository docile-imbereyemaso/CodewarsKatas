class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

// Get Coding :)

class Shark extends Animal {
  constructor(name,age,status) {
    super(name,age,null,null,status);
    this.legs =0;
    this.species = "shark";
  }
}

class Cat extends Animal {
  // Do the same here as you did for Shark - define your constructor function and any other methods you need
  constructor(name,age,status){
  super(name,age,null,null,status)
    this.legs =4;
    this.species ="cat";
  }
   introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
  }
}

class Dog extends Animal {
  // On your own now - you can do it :D
  constructor(name,age,status,master){
     super(name,age,null,null,status);
     this.legs = 4;
     this.species ="dog";
     this.master = master;
  }
  greetMaster(){
    return `Hello ${this.master}`;
  }
}

const shark = new Shark("Billy",3,"Alive and well");
console.log(shark);

const cat = new Cat("Cathy", 7, "Playing with a ball of yarn");
console.log(cat);

console.log(cat.introduce());

const dog = new Dog("Doug", 12, "Serving his master", "Eliza");
console.log(dog);
console.log(dog.greetMaster());