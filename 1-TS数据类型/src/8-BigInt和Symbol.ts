export default {}



// 高于ES2020时可用
let a: bigint = 100n
let b: bigint = BigInt(100)
console.log(a === b); // true


let x: symbol = Symbol('key')
let y: symbol = Symbol('key')
console.log(x === y); // false
