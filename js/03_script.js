// const player = {
//     name: 'Lebron James',
//     club: 'LA Lakers',
//     address: {
//         city: 'Los Angeles'
//     }
// };

// 1)
// console.log(player.name);
// console.log(player.club);
// console.log(player.address);
// console.log(player.address.city);

// 2)
// const { name, club, address: { city } } = player;
// console.log(name)
// console.log(club)
// console.log(`${name} plays for ${club}.`)
// console.log(`${name} lives in ${city}.`)


/*
    **** Challenge ****
    
    For this challenge destruture the following object.
*/

const student = {
    name: "Kyle",
    age: 24,
    projects: {
        diceGame: "Two player dice game using JavaScript"
    }
}

const { name, age, projects: { diceGame } } = student
console.log(name, age, diceGame)