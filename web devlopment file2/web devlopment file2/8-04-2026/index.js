//date

let date = new Date()
console.log(date)

//string length

let str = "sanjay kumar"
console.log(str.length)

//get individual date parts

let dat = new Date()
console.log(dat.getDay())
console.log(dat.getDate())
console.log(dat.getFullYear())
console.log(dat.getHours())
console.log(dat.getMonth())
console.log(dat.getMinutes())

//square root
console.log(Math.sqrt(36));
console.log(Math.sqrt(35));

//cube root
console.log(Math.cbrt(8))

//power
console.log(Math.pow(2,8));

//nearest integer

console.log(Math.round(4,6));
console.log(Math.round(5,5))

//always down

console.log(Math.floor(76,79));

//always up

console.log(Math.ceil(99,92))

//random numbers examples
console.log(Math.random() * 100)

//random integer between o-10

console.log(Math.floor(Math.random() * 10))

console.log(Math.floor(Math.random() * 100))

//random number in a range

function random (min,max){
    return Math.floor(Math.random() * (max-min +1)) +min;
}
console.log(random(10,20))

//template string

let name = "sunny tony"
let age = "22"

let message = `my name is ${name} and i am ${age} years old`
console.log(message)

let s = "web devlopment"
console.log(s.toLocaleUpperCase())
console.log(s.toLocaleLowerCase())
console.log(s.trim())

let d = "sanjay kumar"

console.log(d.toLocaleUpperCase())
console.log(d.toLocaleLowerCase())
console.log(d.trim())


console.log(date)