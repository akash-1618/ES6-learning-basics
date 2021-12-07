// 1)
// let example = 'Anon'
// let e1 = 'Anon Marker'
// console.log(example.padStart(10, '-'))
// console.log(e1.padStart(10, 'a'))
// console.log(example.padEnd(10, '-'))
// console.log(e1.padEnd(10, 'a'))

// 
// 2)
let example = 'YouTube.com/CodingTutorials360'
console.log(example.length)
console.log(example.padStart(100))
console.log(example.padStart(100).length)
console.log(example.padEnd(1)) //since string is longer than "1" character, padEnd is ignored
console.log(example.padEnd(1).length)