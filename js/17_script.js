// 1)
// const buyFlightTicket = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const error = false
//                 // const error = true
//             if (error) {
//                 reject("Sorry your payment was not successful")
//             } else {
//                 resolve("Thank you, your payment was successful") // the value of the resolve gets stored in the variable - buyFlightTicket
//             }
//         }, 3000)
//     })
// }

// //to check if the promise if fulfilled, we write two chain methods - then and catch
// buyFlightTicket()
//     .then((success) => console.log(success))
//     .catch((error) => console.log(error))

// 2)
/**
 * Promises - Challenge
 * Create a promise that returns some user data and throws an error when not found.
 * Log the user data when listening to the promise as well as log the error.
 * 
 * Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 */


const userData = new Promise((resolve, reject) => {
    const error = false
    if (error) {
        reject('500 Level Error')
    } else {
        resolve({
            firstname: 'Anon',
            age: 50,
            email: 'anona@anon.com'
        })

    }
})

userData
    .then((data) => console.log(data))
    .catch((error) => console.log(error))