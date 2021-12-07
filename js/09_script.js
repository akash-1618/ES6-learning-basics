//function declaration
function breakfastMenu() {
    return "I'm going to eat scrambled eggs for breakfast";
}

//anonymous function
const lunchMenu = function() {
    return "I'm going to eat pizza for lunch";
}

//Arrow function
const dinnerMenu = () => {
    return "I'm going to eat a burger for dinner"
}
console.log(dinnerMenu())
    // 
const dinnerMenu1 = (food) => {
    return `I'm going to eat a ${food} for dinner`
}
console.log(dinnerMenu1("salad"))
    // 
    // if the function has only one line, a return statement, we can skip the curly braces and the return keyword
const dinnerMenu2 = (food) => `I'm going to eat a ${food} for dinner`
console.log(dinnerMenu2("berry"))
    // 
    // for one paramater, you can skip the parentheses around the parameter
const dinnerMenu3 = food => `I'm going to eat a ${food} for dinner`
console.log(dinnerMenu3("peach"))