//objects

// in objects data will be stored in key value pairs
//keys will be of strings
//value can be any one of type 
//key and value will be seprated by :
//each key vaue pair will be seprated by ,
//{}

//object can declare in 4ways

//object literal way
//new key word 
//constructor
//class

//object literal way
//syntax

let b = {}
console.log(b)

//new key word 

// let a = new object()

// console.log(a)


let c = {a:"hi", b : "team", c : "good", d:"after noon", one : "hai"}
console.log(c)

console.log(c.a)
console.log(c.b)
console.log(c.c)
console.log(c.d)

console.log(c["one"]) //half operator[]

c.good = "bad"   // adding elements to objects
console.log(c)

delete c.a

console.log(c)

c.b = "hello"       // we change the values for the keys
console.log(c)

//constructor

//In JavaScript, a constructor is a function used to create objects. It is usually 
// written with PascalCase  and you call it with the new keyword.
// we need to use functions in the constructor to create onjects

function student (a,b,c){

    this.name = a
    this.age = b
    this.group = c
}

let stu = new student("sunny","22","bsc")

console.log(stu)

let stu2 = new student("nani","25","eee")
console.log(stu2)

// //class
// //we use class as function in that we use constructor to create objects
// //** class name must be start with capital letter.
// // in class we need to pass parameters to constructor.

class Emp {

    constructor (a,b,c) {

        this.name=a;
        this.age=b;
        this.role=c;
    }
}

let d = new Emp("ayan","4","child")
console.log(d)

let emp1 = new Emp ("mani","32","Lead")
console.log(emp1)