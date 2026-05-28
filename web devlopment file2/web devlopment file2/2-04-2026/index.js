let a = ["hi", "team", "good", "after", "noon", "what" , "happening", "in", "team"]
console.log(a.length)

let num = [6,7,8,9,10,12,34,5,]
console.log(num)
console.log(num[7])
// console.log(num.indexof(3))

//index of used to find index of a particular element in an array
//if the value is not present return -1

//console.log(num.indexof(9))
//console.log(num.indexof(3))

//includes true or false

console.log(num.includes(9))
console.log(num.includes(0))

//splice to delete all the elements in the array

num.splice(0,4)

console.log(num)

//making an array length to 0

console.log(num.length)

num.length = 0

console.log(num.length)

 
// rest parameters (They are denoted by three dots (...) followed by the name of the parameter,
//  which will hold the collected arguments.)
var arr=[10,20,30,40]
var ab=["a","b","c","d"]
console.log(arr,ab)
 
console.log(...arr,...ab)
 
 
// example program for rest parameters
function sum(...numbers) {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
}
 
console.log(sum(5,5,5));        
console.log(sum(5, 10, 15, 20));  
console.log(sum()); 

var c = [34,5,4,6,7,98]
var d = ["v","b","n","m","h","g","f"]

console.log(c,d)
console.log(...c,...d)

const arr1 = ["apple", "banana", "cherry"];

console.log(arr1.indexOf("banana")); 
console.log(arr1.indexOf("orange")); 

 
 const arr2 = ["a", "b", "c", "b"];

console.log(arr2.lastIndexOf("b")); 
console.log(arr2.lastIndexOf("x")); 

let arr3 = [1, 2];
let arr4 = [3, 4];

let result = arr3.concat(arr4);
console.log(result); 

// first = "Hello"
// second = "World"

//  result = first + " " + second
// print(result)  



 