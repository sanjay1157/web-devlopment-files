//web storage

// in this data will stores in the form of an object

//key value pairs

//setItem  to stor the data

//getItem to retrive the data

//removeItem to remove the data

//clear is used to clear total data.

//they are two storages local and session 

//local storage

localStorage.setItem("name" , "sunny")

localStorage.setItem("team" , "mummy")

localStorage.setItem("hi" , "morning")

localStorage.removeItem("hi")


console.log(localStorage.getItem('name'))

//session storage

sessionStorage.setItem("name" , "tony")

sessionStorage.setItem("film" , "frame")

sessionStorage.setItem("team" , "daddy")

sessionStorage.removeItem("team")

console.log(sessionStorage.getItem('name'))
console.log(sessionStorage.getItem('film'))

sessionStorage.clear()

console.log(sessionStorage.getItem('name'))
console.log(sessionStorage.getItem('film'))

