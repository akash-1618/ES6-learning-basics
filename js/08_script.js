// 1)
// function add(nums) {
//     console.log(nums)
// }
// add(4)

// 2)
// function add(nums) {
//     console.log(nums)
// }
// add(4, 5, 7, 8, 12)

// 3)
// function add(nums) {
//     console.log(arguments) //arguments is deprecated unofficially
// }
// add(4, 5, 7, 8, 12)

// 4)
function add(...nums) { //rest operator
    console.log(nums);
}
add(4, 5, 7, 8, 12)

//when we write a function and don't know how many arguments are to be passed and we don't want to pass an array, we can use rest operator