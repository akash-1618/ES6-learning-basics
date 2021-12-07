// 1)
// let incomes = [62000, 67000, 75000]
// let total = 0
// for (const income of incomes) {
//     total += income
//     console.log(income)
// }
// console.log(total)

// 2)
// let fullName = "Anon is just Anon"
// for (const char of fullName) {
//     console.log(char)
// }

// //for of loops can be used with iterables

// 3)
// Challenge - For Of Loop

// Using the For of Loop, iterate through the array and print into the console, a message like:
// Tom lives in Lisbon

const students = [
    { name: "John", city: "New York" },
    { name: "Peter", city: "Paris" },
    { name: "Kate", city: "Sydney" }
]
let infoStr = ""

for (let i in students) {
    let { name, city } = students[i]
    infoStr = `${name} lives in ${city}`
    console.log(infoStr)
        // console.log( student.name + " lives in " + student.city )
}