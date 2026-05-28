//task

let a = document.getElementById("text")
let b = document.getElementById("login")
let c = document.getElementById("logout")

checkAuth()

login.addEventListener("click" , () =>{

    localStorage.setItem("authtoken" , "12345678")

    checkAuth()
})

logout.addEventListener("click" , () => {

    localStorage.removeItem("authtoken")

    checkAuth()
} )

function checkAuth() {

    let token  = localStorage.getItem("authtoken")

    if (token) {
        text.innertext = "welcome"
        login.style.display = "none"
        logout.style.display = "inline"
    }
    else {
        text.innertext = "please login"
        login.style.display = "inline"
        logout.style.display = "none"

    }
}