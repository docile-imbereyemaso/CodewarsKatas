class Person{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

     greet(){
        return `Hello, ${this.firstName} ${this.lastName}!`
    }
}

const bob = new Person("bob","Smith");
console.log(bob.greet());