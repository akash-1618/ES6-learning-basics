/**
 * Fetch
 * 
 * RESTFul API - https://jsonplaceholder.typicode.com/
 * Docs - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */

// 1)
// fetch('https://jsonplaceholder.typicode.com/comments/1') //arg is an endpoint
//     //fetch returns a promise   
//     .then(response => response.json()) //json maps out the body content. then returns another promise. chain
//     .then(data => console.log(data))


// fetch('https://jsonplaceholder.typicode.com/comments', {
//         method: 'POST',
//         body: JSON.stringify({
//             postId: 1,
//             name: 'Anon',
//             email: 'anon@anon.com',
//             body: 'That was dope!'
//         })
//     })
//     .then(response => response.json())
//     .then(data => console.log(data))




// 
// 2)
/**
 * Fetch - Challenge
 * 
 * GET the first comments value 'https://jsonplaceholder.typicode.com/comments/1' and log its value.
 * POST a new comment using 'https://jsonplaceholder.typicode.com/comments' and log its value.
 * 
 * RESTFul API Guide - https://jsonplaceholder.typicode.com/guide.html
 * Docs - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */
fetch('https://jsonplaceholder.typicode.com/comments/1')
    .then(response => response.json())
    .then(data => console.log(data))

fetch('https://jsonplaceholder.typicode.com/comments', {
        method: 'POST',
        body: JSON.stringify({
            postId: 1,
            name: 'Anon',
            email: 'anon@anon.com',
            body: 'Ok?'
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))