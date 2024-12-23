console.log("Hello1");
window.console.log("Hello2"); //console.log(); is a function inside window object.

console.log(window.document); //Just prints values or objects as an element.
console.dir(window.document); // prints properties and methods of speacial objects like documentl.

console.dir(document.body.childNodes[1]);

document.body.style.backgroundColor = "black";
document.body.childNodes[3].innerText = "I changed the text through JS";
document.body.childNodes[3].style.color = "blue";


let heading = document.getElementById("nonExistedId");
console.dir(heading); //will print "null"
console.log(heading); //null as well

let headings = document.getElementsByClassName("nonExistedClassName");
console.dir(headings); //will print HTML collection of size 0.
console.log(headings); //same as console.dir();

let allElem = document.querySelectorAll("p"); //returns NodeList
console.dir(allElem);

