//Array methods
//for of loop
//used to store the values in array for array iterator
//in array for of used to print the values in the array

let a = [66,77,88,99,11,12,23,34]

for(let value of a){

    console.log(value)
}

//indexof  // print the first accurence of the value index

let b = [10,20,30,40,50]
console.log(b.indexOf(40))

//last index of  // print the last accurence of the value index

let c = [22,33,44,55,66,77,22,33,55]
console.log(c.lastIndexOf(55))

//cocatenation // adding of two arrays
let d = [1,2,3,4,5]
let e = ["a","b","c","d","e"]
console.log(d.concat(e))

//for in loop
// used to iterate over indexes (keys) of an array or object.
//in array for in used to print the index values of an array

let f = [34,45,67,89,54,32,21]

for (let value in f){
    console.log(value)
}

//filter

let g = [1,2,3,4,5,6,7,8,9,10]
console.log(g.filter(h=> h%2==0))
console.log(g.filter(h=> h%3==0))
console.log(g.filter(h=> h>5))

for (h of g){
    if(h%4==0){
        console.log(h)
    }
}

//sort
let i = [9,87,76,54,43,21,45,67,89]
console.log(i.sort())
console.log(i.sort((a,b)=>a-b))  //it will come the values in the order

//some 
// in some if any one element is true for the condition then total array is true

let j = [23,45,6,7,89,76,54,65,74,101]
console.log(j.some(k => k>100))

let k = [1,3,5,7,9,11]
console.log(k.some(l => l%2==0))

//every
//in every the total elements in the array need to be pass the condition then it will be true

let l = [2,3,4,5,6,7,8,9]
console.log(l.every(m => m<10))

let m = [23,45,46,47,48,39,51]
console.log(m.every(n => n<50))


//with out using sort method in array
let n = [99,78,56,54,34,2,3,1,4,59];
for(let i=0; i<n.length; i++){
 
    for(let o=i+1; o<n.length; o++){
if(n[i]>n[j]){
    [n[i],n[j]]=[n[j],n[i]];
}
}
}
console.log(n)

//removing duplicates

var p = [1,1,2,3,4,5,5,4,3,2]

console.log(...new Set(p))

