

// /*while ( age < 10) {

//     console .log ( "Your age less than 10!");
//     age++;

// } 

// document.write("your now over 10"); */
// var links = document.getElementsByTagName("a"); 

// for (i=0; i <links.length; i++){
//     console.log ("this is link nmbr" + i);

// }

// document.write("all links are looped ");   

var person = prompt("Please enter your name", "Harry Potter");

if (person != null) {
  document.getElementById("demo").innerHTML =
  "Hello " + person + "! How are you today?";
}