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
  constructor(/* Insert your parameters here */) {
    super(/* Make a call to the parent class's constructor with the correct arguments */);
  }
}

class Cat extends Animal {
  // Do the same here as you did for Shark - define your constructor function and any other methods you need
}

class Dog extends Animal {
  // On your own now - you can do it :D
}