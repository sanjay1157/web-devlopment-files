//destructuring

// destructuring in arrays

let a = ["sunny",1,2,3,4,5,6]

let [A,B,C,D] = a

console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])

console.log(A,B,C)

//nested array in destructuing

let b = [78,98,87,65,[23,56],34,[21,32,43]]

let [P,Q,R,S, [T,U],W,[X,Y,Z]] = b 

console.log(T,U,X,Y,Z)

let c = {name : "sunny" , role : "job" , age : 22  }

console.log(c)

console.log(c.name)

var d = c.role

console.log(d)

//Iterator
let number1 = [10, 20, 30, 40];
let k = number1[Symbol.iterator]()
console.log(k.next());
console.log(k.next());
console.log(k.next());
console.log(k.next());
console.log(k.next());

let number2 = [1,2,3,4]

let s = number2[Symbol.iterator]()

console.log(s.next())
console.log(s.next())
console.log(s.next())
console.log(s.next())
console.log(s.next())
 
//Generator
function* str() {
  yield "Hello";
  yield "Welcome";
  yield "Done";
}
 
const gen = str();
 
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

function* sum () {

  yield "hi"
  yield "team"
  yield "good"
  yield "morning"
}

let sim = sum()

console.log(sim.next())
console.log(sim.next())
console.log(sim.next())
console.log(sim.next())
console.log(sim.next())
 
 

