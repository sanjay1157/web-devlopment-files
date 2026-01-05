//DOM

//Document object model

//it will attach the document in the form of tree structure.

//HTML //top most element

// Head   (meta tag's)  , Body (header(nav,section....))(footer)(content)

//reading dom properties

//selecting dom element

//getElementById()
//getElementByClassname()
//getElementByTag()
//queryselector()
//querydelectorall()

console.log(document)

//getElementById()
//we can't access duplicate id's
//single element with that id
    
let a = document.getElementById("main heading")
console.log(a)

let b = document.getElementById("text")
console.log(b)

//getElementByClassname()
// we can access duplicates in classes
//we can have same class name for multiple elements.
//in the form of an array
let c = document.getElementsByClassName("men")
console.log(c)

let d = document.getElementsByClassName("lunch")
console.log(d)


//getElementByTag()
let e = document.getElementsByTagName("p")
console.log(e)

let f = document.getElementsByTagName("h1")
console.log(f)

let g = document.getElementsByTagName("h2")
console.log(g)


//queryselector()

//first occuramce we get by using query selector

let h = document.querySelector("p")
console.log(h)

let i = document.querySelector(".men")
console.log(i)

let j = document.querySelector(".how")
console.log(j)

let k = document.querySelector("p")
console.log(k)

let l = document.querySelector(".lunch")
console.log(l)

//queryselector all
const divs = document.querySelectorAll('div','p');
console.log(divs)

let m =  document.querySelector(".tet")
console.log(m)