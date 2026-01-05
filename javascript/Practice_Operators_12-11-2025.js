//Operators

//Arthametic operators {+,-,/,%,--,++,*}

var a = 78
var b = 2

//divison//multiplication//modulus
console.log(a/b)
console.log(a*b)
console.log(a%b)
//console.log(a++b)

//Increment
//Pre increment
//Post increment 

console.log(a)//78
console.log(++a)//79
console.log(a++)//79
console.log(a)//80

//Decrement
//pre
//Post

console.log(a)//80
console.log(--a)//79
console.log(a--)//79
console.log(a)//78

//Exeponential

var a = 8 
var b = 7

console.log(a**b)

//Assignment operator =
// +=, -=, Short hand operators /=, *=, %=

var a = 8 
var b = 7

console.log(b)

b += a // b = a+b

console.log(b)

//comparison operators
//used to compare 2 values//result will be boolean value true or false

// < , > , <= , >=
// == loose equalilty // check only value
// === strictly equality // check value and data type aslo 
// != not equality
// !== strictly inequality

var a = 15
var b = 11
var c = 15

console.log(a<b)
console.log(a>b)
console.log(a<=c)

var d = 7
var e = '7'

console.log(d==e, "loose equality" )
console.log(d===e, "strictly equality")
console.log(d!=e , "loose inequality")
console.log(d!==e , "strictly inequality")

//after18
var age = 15
console.log(age>18)

//logical operators
//And // (&&)If both conditions are true then the results will be true.
//or // (||)If any one of the condition is true then result will be true.
//not // (!)

console.log(2>4 && 2<4)
console.log(2>4 || 2<4)
console.log(!(2<4))

//Bitwise
//Ternary
//Condition ? True : False

//Ternary
//syntax:- ? :

let fund = 7000

fund>10000? console.log("you are eligible for credit card") : console.log("You are not eligible for credit card")

let payment = 45000

payment>10000? console.log("you are elegible for credit card") : console.log("You are not eligible for credit cadr")
//String
//Typeof

//Bitwise Operators
// & AND sets each bits to 1 if both bits are 1
// | OR sets each bits to 1 if one of two bits is 1
// ^ XOR sets each bits to 1 if only one of two bits is 1
// ~ inverts the all bits
// << left shift and fills empty space withb zero
// >> right shift

let  x = 3
let  y = 2

console.log(x&y)

console.log(x|y)

console.log(x^y)

console.log(~5)

console.log(x<<y)

console.log(x>>y)

//Typeof

let p = "string"
let q = 1
let r = true
let s
let t = null
let u = 999n

console.log(p, typeof(p))
console.log(q, typeof(q))
console.log(r, typeof(r))
console.log(s, typeof(s))
console.log(t, typeof(t))
console.log(u, typeof(u))
