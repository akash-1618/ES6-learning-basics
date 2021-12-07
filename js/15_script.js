// import { Animal, Cat } from './15_a_script.js'


// 1)
class Animal {
    constructor(type, legs) { //constructor build instance of class
        this.type = type //this animal class has type of the type we pass in
        this.legs = legs
    }
    makeNoise(sound = "Loud") {
        console.log(sound)
    }
    get metaData() {
        return `Type : ${this.type}, Legs : ${this.legs}`
    }
    static return10() {
        return 10
    }
}


// a)
// console.log(Animal.return10()) // static functions don't need to be instantiated

// let cat = new Animal('Cat', 4) // new keyword creates an instance of an object
// console.log(cat.legs)
// cat.legs = 3
// console.log(cat.legs)

// cat.makeNoise()
// cat.makeNoise('Meow')

// console.log(cat.metaData)

class Cat extends Animal {
    constructor(type, legs, tail) {
        super(type, legs) //when we use a constructor that is extended from a parent class, we use super keyword
        this.tail = tail
    }
    makeNoise(sound = "meow") {
        console.log(sound)
    }
}

let cat = new Cat('Cat', 4)
cat.makeNoise()

console.log(cat.metaData)

// 
// 
// 2)
/*
**Classes Challenge**:

Create a class Player with the following:
- Add a Name and Country properties
- Add a function that when it runs should print into the console ("Messi was born in Argentina");
- Make sure to adapt this function to receive dynamic Names and Clubs.

Create a Subclass called TennisPlayer that extends from the class Player
- Add a new property Age.
- Add a function that when it runs should print into the console something similar ("Rafael Nadal is 34 years old and knows how to play Tennis");
- Make sure the Name and Age are dynamic.
*/

class Player {
    constructor(name, country) {
        this.name = name
        this.country = country
    }
    playerFunc = (name, country) => `${this.name} was born in ${this.country}`

}
class TennisPlayer extends Player {
    constructor(name, country, age) {
        super(name, country)
        this.age = age
    }
    tennisPlayerFunc = (name, age) => `${this.name} is ${this.age} years old and knows how to play Tennis`
}

let player = new Player('Messi', 'Argentina')
console.log(player.name)
console.log(player.playerFunc())

let tennisPlayer = new TennisPlayer("Anon", "Austrailia", "10")
console.log(tennisPlayer.country)
console.log(tennisPlayer.tennisPlayerFunc())
console.log(tennisPlayer.playerFunc())