//Loops
//
// For Loop
// While Loop
// Do While
// For of
// For in
// For Each

// For Loop
// A set of instructions can be executed repatedly for specific number of times by using for loop 
// Syntax // for (intialisation;condition;increment/decrement){}

let i;
for(i=1;i<10;i++){
    console.log(i)
}

let fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// // to print odd numbers 

// let c= 1
// for(c;c<=20;c+=2){
//     console.log(c)
// }

// to print prime numbers


// let g = 30

// for(let f=2;  f<=g; f++){

//     for (let j=2; j<f && f%j !==0){}

// }

//While Loop
// While loop is used to execute to a block of code repatedly as long as specified condition is true. 
//once the specified condition become false.The loop will be Exited.
// While (condition) {
//     ----
//     code
//      increment/decrement    
// }  

let j =1;
while (j<10){
    console.log(j)
    j+=1
}

const fruit = ["apple", "banana", "orange", "mango"];
let index = 0;

while (index < fruit.length) {
    console.log(fruit[index]);
    index++;
}


let w = 1
let count = 0
//list of first ten even numbers
while(count<=10){
    if(w%2==0){
        console.log(w)
        count++
    }
    w++
    //count++ // get the first five even number if we write here
}

// // prime numbers using while loop

// let n = 2
// let limit = 30

// while (n <= limit){

//     let i = 2
//      while (i < n && n % i !==0) {
//         i++

//      }
//      if (i == n ){
//         console.log(n)

//      }
//      n++
// }

// to print odd numbers

// let num = 1

// while( num <= 30){

//     console.log(num)
//     num+= 2
// }

//Do while
//This loop will execute block of code once, before checking the condition is true or false and
//then it wil repat the loop as long as the condition is true.
// do{
//     ----
//     Code
//     increment/decrement
// }  
// while(condition);

let k = 98

do{ 
    console.log(k)
    k+=1
}
while(k<110);

let colors = ["red", "green", "blue", "yellow"];
let r = 0;

do {
    console.log(colors[r]);
    r ++;
} while (r < colors.length);

// let cricket = ["Dhoni","kohli","Rohit"]

// do {
//     console.log(cricket[z])
//     cr++
// }
// while (let z = o; z < cricket.length);

//for each loop
// is used to exclusively to loop through elements in array
//17-11-2025
//Infinite loops

//For of //Arrays // when we use for of we get the values

let arr = [1,2,3,4]
console.log (arr)

for (a of arr){
    console.log(a)

}
// for in // objects // key based on that the key get value // we can use in arrays if we need
let obj = {a:"hello" , b:"world"}
console.log(obj)
console.log(obj[a]) // undefined static key
console.log (obj["a"]) // when we are looping the keys will come we called that dynamic keys

for (d in obj){
    console.log(d)
}

// using for in to arrays

for (e in arr){
    console.log(e)
}

let person = {name: "sunny", age: 22, city:"RJY"}

for(key in person){
    console.log(key,":", person[key])
}

const word = "HELLO";

for (let letter of word) {
    console.log(letter);
}

// Infinity loop

// while (true) {
//   console.log("This will run forever");
// }

// let y = 0;
// while (y < 5) {
//   console.log(i);
//    i++;  // Forgot to increment → infinite loop
// }

//prime numbers using while loop

let n = 2
let limit = 30

while (n <= limit){

    let i = 2
     while (i < n && n % i !==0) {
        i++

     }
     if (i == n ){
        console.log(n)

     }
     n++
}
//to print odd numbers

let num = 1

while( num <= 30){

    console.log(num)
    num+= 2
}

// to print odd numbers in for loop 

let c= 1
for(c;c<=20;c+=2){
    console.log(c)
}