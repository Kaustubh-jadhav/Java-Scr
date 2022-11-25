console.log("Hello world")
let a = 67
console.log(a)
a="kaustubh"
console.log(a)

// var , let, const
// var is static is also redeclare

// let has block level scoope
// you can not re declare let get update
let b = 6
console.log(b)

//const that can not be redeclare
//constant cannot be change or update

// premitive data types
// NNSSBBU
// NULL NUMBERR SYMBOL STRING BOOLEAN BIGINT UNDIFIEND
// what is type of data that stored in variables 
let a1 =null
let b2= 345
let c = true
let d = BigInt("8777")
let e = "sonu"
let f = Symbol("Symbol")
let g = undefined
console.log(typeof c,typeof b2,typeof g, typeof d, typeof e)

// Non premitive data types - Objects
// key value paire

let item = {
    "kaustubh":true,
    "age":20,
}
console.log(item["age"])
console.log(item["kaustubh"])

