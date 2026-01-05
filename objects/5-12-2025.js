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

// class Emp {

//     constructor (a,b,c) {

//         this.name=a;
//         this.age=b;
//         this.role=c;
//     }
// }

// let d = new Emp("ayan","4","child")
// console.log(d)

// let emp1 = new Emp ("mani","32","Lead")
// console.log(emp1)


// //copying of objects
// //normal copy
// //shallow copy
// //deep copy

// //normal copy
// // in normal copy objects if we change anything in one object it will change in the another object also.
// //this objects will store in same memory location
// var one = {a:"my",b:"name",c:"is",d:"sunny"}

// var two = one

// console.log(one)
// console.log(two)

// two.e = "tony"

// console.log(two)
// console.log(one)

// one.f="nice"

// console.log(two)
// console.log(one)

// //shallow copy

// //with the help of spread operator{...object name}
// //in shallow copy if we change in one object it will not change in the main object or another object
// //for primitive data type it will not chnage reference data type it will changes.
// var one = {a:"my",b:"name",c:"is",d:"sunny",obj:{e:"mummy",f:"daddy"}}

// var three  = {...one}
// console.log(three)

// three.g = "bye"
// console.log(three)
// console.log(one)
// //we use double quotes for to differntate the objects in the output
// console.log("one",one)
// console.log("three",three)

// one.h = "see"
// console.log(one)
// console.log(three)

// one.obj.e="spouse"
// console.log("one",one)
// console.log("three",three)

// three.obj.f="mama"
// console.log("three",three)
// console.log("one",one)

// //deep copy
// //JSON.parse(JSON.stringify)
// //IN deep copy primitive and non primitive data types will not change in objects.
// //this object will store in the different memory locations.

// var four = JSON.parse(JSON.stringify(one))
// console.log("four",four)

// four.a="mine"
// console.log(four)
// console.log(one)
// //in shallow it will change inside object but it will not change in the deep copy.
// four.obj.a="brother"
// console.log("four",four)
// console.log("one",one)

// //Arrays

// //normal copy
// //assignment operator uses in normal copy to change elements in objects.

// var array = [23,45,67,89,56]

// var five = array

// console.log("five",five)
// console.log("array",array)

// array[5]=98
// five[0]=89

// console.log("array",array)
// console.log("five",five)

// //shallow copy

// var array = [23,45,67,89,56,[32,42,52,62]]

// var six = [...array]

// console.log("six",six)

// six[0]=9999
// // array[1]=899
// six[5][0]=2222

// console.log("six",six)
// console.log("array",array)

// //deep copy

// var seven = JSON.parse(JSON.stringify(array))

// console.log(seven)

// seven[5][0]="hai"

// console.log("seven",seven)
// console.log("array",array)

// array[3]="number"
// console.log("seven",seven)
// console.log("array",array)


// //shallow copy in object
// //object.assign

// sin = {a:10,b:20,c:30,d:40}

// let eight = Object.assign({},sin)

// console.log(eight)

// eight.a=45

// console.log("eight",eight)
// console.log(sin)

// eight.e=60
// console.log("eight",eight)
// console.log(sin)

// //shallow copy in array
// //object.assign

// sin1 = [10,20,30,40,50]

// let nine = Object.assign({},sin1)
// console.log(nine)

// nine[0]=99
// console.log("nine",nine)
// console.log(sin1)

// //concate in shallow

// let fruits = ["apple","orange","pepesi"]
// let fruit = ["bananna"]
// let ten = fruits.concat(fruit);
// ten[3]="bananna"
// console.log("fruit",fruits)
// console.log("ten",ten)

// // //array.splice
// // sin = {a:10,b:20,c:30,d:40}

// // let pen = array.slice(sin)

// // console.log(pen)

// // pen.a=85

// // console.log("pen",pen)
// // console.log(sin)

// // pen.e=70
// // console.log("pen",pen)
// // console.log(sin)

// //object keys
// //object keys will gve output only keys in the form of array

// let person1 = {name:"sanjay",lname:"kumar",age:"22"}

// let value1 = Object.keys(person1)
// console.log(value1)

// //object values
// //object values will give output only values in the form of array.

// let person2 = {name:"sanjay",lname:"kumar",age:"22"}
// let value2 = Object.values(person2)
// console.log(value2)

// //object entries
// //object entities will give only output entries in the form of array.

// let person3 = {name:"sanjay",lname:"kumar",age:"22"}
// let value3 = Object.entries(person3)
// console.log(value3)


