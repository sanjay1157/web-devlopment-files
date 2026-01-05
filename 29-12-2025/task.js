// //define function getdata
// //function will fetch data from the external API

// function getdata(){

// //fetch dummy data from the JSONPlaceholder API

// fetch ("https://jsonplaceholder.typicode.com/users")

// //convert response to JSON format
// .then (res => res.json())

// //handle the parsed JSON data

// .then(data =>{

// // get the html element  with id = term
// // this is where we display the fetched data

// let term = document.getElementById("term")
// // let clearBtn = document.getElementById("clear-btn")

// //clear any previous content inside the term element
// //this prevents duplicates data when the function is called again

// term.innerHTML = ""

// //loop through first 10 users in the array
// //we can use here data.length or we know exact users here 10

// for(i=0; i<10; i++){

// //append user information to the term element
// // += adds new content without removing exixiting content

// term.innerHTML +=
// "Name:" + data[i].name + "<br>" +    // name display in ui
// "User name:" + data[i].username + "<br>"+ // user name diaplY IN UI
// "Email:"+ data[i].email + "<br>" +         //email display in ui
// "Geo:"+ 
//  data[i].address.geo.lat + "," +  //display geographic coordinates
// data[i].address.geo.lng + "<br><br>"    //longitude

// }
// })
// }

// //show clear button

// document.getElementById ("clear").style.display = "inline-block"

// //clear display data from ui 

// function cleardata() {
//   document.getElementById('term').innerHTML = "";

//   //to disable clear button

// document.getElementById("clear").style.display= 'none'
// }


// // function cleardata() {

// //     displayArea.innerHTML = ''    //earse all the records from container
// // }

// // //eventlistener
// //  clear-Btn.addEventListener('click' , cleardata)

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("clear").style.display = "none";
});
                                                                                      
// fetch data
function getdata() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
      let term = document.getElementById("term");
      let clearBtn = document.getElementById("clear");

      term.innerHTML = "";

      for (let i = 0; i < data.length; i++) {
        term.innerHTML +=
          "Name: " + data[i].name + "<br>" +
          "Username: " + data[i].username + "<br>" +
          "Email: " + data[i].email + "<br>" +
          "Geo: " + data[i].address.geo.lat + ", " +
          data[i].address.geo.lng + "<br><br>";
      }

      clearBtn.style.display = "inline-block";
    });
}

// clear data
function cleardata() {
  document.getElementById("term").innerHTML = "";
  document.getElementById("clear").style.display = "none";
}



 //ApI calls 

 //GET -> fetching the data
 //post -> To delete the data
 //Put -> it changes the entir the record
 //patch -> updates only partial data
 //delete -> to delete the data

 //fe ---> API (get) ---> BE (Routers , Middleware , Controllers)

 let data = {

    name:"sanjay kumar"
 }

 fetch("https://jsonplaceholder.typicode.com/users")

 .then((data) => {
    return data.json()
 })

 .then((a) => {

    data = a
    console.log(a)
 })

 .catch((b) => {
    data = b
    console.log(b)
 })

 console.log(data)