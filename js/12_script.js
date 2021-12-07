// 1)
// if (false) {
//     var example = 5;
// }
// console.log(example)
// 
// // this is what js sees
// var example;
// if (false) {
//     example = 5;
// }
// console.log(example)

// 2)
// if (false) {
//     let example = 5;
// }
// console.log(example)
// 
// // this is what js sees
// if (false) {
//     let example = 5;
// }


// let should be used for values which are reassignable.
// const stands for constant and cannot be reset.

// 3)
// const example = 5 // no., string, boolean; exclude objects and array
// example = 10
// console.log(example)

// 4)
// const example = []
// example.push(5)
// console.log(example)
// example = 3
// console.log(example)

// 5)
const example = {}
example.firstName = "Dylan"
console.log(example)