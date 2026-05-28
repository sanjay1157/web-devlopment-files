//DOM traversing
//parent element
//children element
//first element child
//last element child

let a = document.getElementById("name")
console.log(a)
console.log(a.parentElement)

//children elements
let b = a.parentElement
console.log(b.children)

//first element child

console.log(b)
console.log(b.firstElementChild)

//last element child

console.log(b)
console.log(b.lastElementChild)

//creating DOM element

let d = document.createElement("a")
console.log(d)

d.innerText = "ph:77777777777"
console.log(d)

//adding this element to html to view in the ui page that means view in website page

b.appendChild(d)

//prepend

let e = document.createElement("h1")
console.log(e)
e.innerText="nothing done"
b.prepend(e)
console.log(e)

let f = document.getElementById("btn")
console.log(f)

f.onclick = function mani (){

    alert("button clicked")
    // b.appendChild("d")
    console.log("button clicked")
}

// function tet (){
//     // alert("button clicked")
//     f.innerText = "button clicked"

// }

// f.addEventListner("click",tet)

let j = document.getElementById("mid")
console.log(j)

console.log(j.parentElement)

//previous sibilling

console.log('previousSibling:', mid.previousSibling)

console.log('previousSibling:', mid.previousElementSibling)
//next sibilling

console.log('nextSibling:', mid.nextElementSibling)




