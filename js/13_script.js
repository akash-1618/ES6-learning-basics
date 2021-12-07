// import { data } from "./13_eg_script"
// let updatedData = data
// updatedData.push("Anon")
// console.log(updatedData)


/*
**Challenge**

Inside of the file data.js, create a function add, that will receive 2 numbers and return the sum of them.
Make sure to export this function.

- Import the function add, into the index.js file
- Create a variable result, that will hold the result of the function add when you call it and pass 2 numbers into it.
- print into the console the value of the variable result;
*/

import { add } from "./13_eg_script.js"
let result = add(3, 2)
console.log(result)



// 
// Uncaught SyntaxError: Cannot use import statement outside a module
//