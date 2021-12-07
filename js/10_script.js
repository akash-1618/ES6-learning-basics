// 1)
const leadSinger = (artist = "Someone") => {
        console.log(`${artist} is the lead singer of Cold Play`)
    }
    //"someone" is the default parameter here
leadSinger("Chris Martin")
leadSinger()

// 2)
/*
**** Challenge *****

Create a function that receives a parameter of food.
If your parameter food is going to have a value of "milk"
the function should print into the console the following:

"I'm going to buy milk from the grocery shop"

But if you dont pass a value to your parameter food, it should print
"I'm going to buy something from the grocery shop"

*/

const foodFunc = (food = "something") => `I'm going to buy ${food} from the grocery shop`
console.log(foodFunc())
console.log(foodFunc("milk"))