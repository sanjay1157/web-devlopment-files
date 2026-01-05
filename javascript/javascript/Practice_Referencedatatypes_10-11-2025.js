var a = "string"
var b = 1
var c = true
var d
var e = null
var f = 999n

console.log(a, typeof(a))
console.log(b, typeof(b))
console.log(c, typeof(c))
console.log(d, typeof(d))
console.log(e, typeof(e))
console.log(f, typeof(f))


//Reference data types
//Object 
//Arrays
//Functions
//E.s-6-2015 (set, weakset, map, weakmap)
//Date
//Rergular Expressions

//object

//collection of key value pairs.
//each key and value will be seprated by :.
//each key value pair will be seprated by ,. 

var obj = {name:"sanjaykumar", age:22, city:"hyd", Number:77777777777, role:"associate software engineer", salary:20000, Attendence:{oct:28,dec:28}, arr:[978,675,456]}
console.log(obj)

//arrays // An array represents a group of similar elements of sme data type.
//Homegenous
//Hetrogenous
var arr = [1,2,3,4,"hello","hai",true,false,null,[123,987,567],{name:"sanjaykumar"}]
console.log(arr)

//Functions

function hello(){
    console.log("hi good after noon team")
}
hello()

//Calculation of salary on number of working days.

console.log(3000*17)
console.log(3000*20)
console.log(3000*19)

function salary(name,days){ //parameters
    var perday = 2500

    console.log("Monthly salary of", name,"is", perday*days)

    console.log("execution completed")
    return perday*days
    

}

salary ("vijay",22) //arguments
console.log(salary("govind",21))

console.log("calculate the all salaries")

//Date It is abuilt in java script used to work with dates.

var today = new Date();
console.log(today)

//Here new date is an object stored by reference.

let name =  new Date(20-9-2002);
console.log("sanjay",name)

//regular expressions

//map The data will be stored in key value pairs and key can be any one of data type.

let l = new Map()
l.set("name", "sanjay kumar")
l.set(1,"date")

l.set(true,"value")
console.log(l)

//what is the difference between object and map in reference data types?


var m = {name:"sanjay kumar", 1: "date",true:"value"}//object
console.log(m)

//set a collection of unique values.

let myarray = [11,22,33,44,55];

let myset = (myarray);

myset.clear = (myarray);

myset.add = (100);

myset.add = ({a: 39, b: 89});

//myset.delete = (11);


console.log(myset)

console.log(myset.size);

//map

let mymap = new Map ([['a1', 'hello'],['b2', 'team']]);
mymap.set(['c3', 'good morning']);
mymap.delete('a1');
console.log(mymap.size);

//weakset

let bikeweakset = new WeakSet();

let bike1 = {

    make : "royal",
    model : "bullet"

}

let bike2 = {

    make : 'yamaha',
    model : 'r15'

}
bikeweakset.add(bike1)
bikeweakset.add(bike2)
console.log(bikeweakset)

//weakmap

let carweakmap = new WeakMap();

let key = {
    id : 1
}
let bike3 = {

    make: 'honda',
    model: 'civic'

}
carweakmap.set(key,bike3);

console.log(carweakmap)