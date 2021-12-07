// 1)
// let contacts = ["Mary", "Joel", "Danny"];
// let personalFriends = contacts
// contacts.push("John");
// console.log(personalFriends)

// //When we update contacts, the copy created in personalFriends also changes. to avoid that, we use spread operator

// 2)
// let contacts = ["Mary", "Joel", "Danny"];
// let personalFriends = [...contacts]
// contacts.push("John");
// console.log(personalFriends)

// 3)
// let contacts = ["Mary", "Joel", "Danny"];
// let personalFriends = ["David", ...contacts, "Lily"]
// contacts.push("John");
// console.log(personalFriends)


// 4)
// let person = {
//     name: "Adam",
//     age: "25",
//     city: "Manchester"
// }
// let employee = {
//     ...person,
//     salary: 50000,
//     position: "Software Dev"
// }
// console.log(employee)

// 
// 5)
/*
    **** Challenge ****
    
    Imagine you are going out to do some grocery shopping.
    So you have an array called shoppingList with all the products you want to buy.
    
    Now that you are inside of the shop, you have a basket with all the products from your list, but you want to add a few more.
    
    Create a new array called shoppingBasket, that will be a copy of the shoppingList array, and add some new products into it. 

*/

const shoppingList = ["eggs", "milk", "butter"];

let shoppingBasket = [...shoppingList, "lemons", "fruits", "flour"]
console.log(shoppingBasket)