// 1)
// const photos = []

// function photoUpload() {
//     let uploadStatus = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 photos.push("Profile Pic")
//                 resolve("Photo uploaded")
//             }, 3000);
//         })
//         // js follows synchronous fashion and skips the setTimeout's 3000ms and 
//         // thus the value of uploadStatus is saved as Promise, since the promise has not been completed yet and js isn'i bothered with this fact
//     let result = uploadStatus
//     console.log(result)
//     console.log(photos.length)
// }
// photoUpload()

// 2)
// // turn the func into async
// const photos = []

// async function photoUpload() { //
//     let uploadStatus = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             photos.push("Profile Pic")
//             resolve("Photo uploaded")
//         }, 3000);
//     })
//     let result = await uploadStatus //
//         // until the result of uploadStatus is not received, js won't move forward
//     console.log(result)
//     console.log(photos.length)
// }
// photoUpload()



// 
// 3)
//Challenge - Async & Await

//Print on the console a random joke from the Chuck Norris API using Fetch and Async and Await

const apiUrl = "https://api.chucknorris.io/jokes/random";


async function getJoke() {
    const response = await fetch(apiUrl)
    const data = await response.json()
    console.log(data.value)
}

getJoke()

// 
// WRONG
// 
// // const apiUrl = "https://api.chucknorris.io/jokes/random";
// // async function printJoke() {
// //     let getJoke = new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             fetch(apiUrl)
// //                 .then(response => response.json())
// //                 .then(data => console.log(data.value))
// //         }, 3000)
// //     })
// //     let result=await getJoke
// //     console.log(result)
// // }