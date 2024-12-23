/*

//P-1 || Create a new button element. Give it a text "click me", bgcolor red and text color white. Insert the button as the first element inside the body tag.

let button = document.createElement("button");
button.innerText = "Click me";
button.style.backgroundColor = "red";
button.style.color = "white";

let body = document.querySelector("body");

body.append(button);

*/

//P-2 || Create a <p> tag in HTML, give it a class and some styling .
//now create a new class in CSS and try to append this class to the <p> element.
//Did you notice how you overwrite the class name when you add a new one?
//Solve this problem using classList.

let para = document.querySelector(".para");
para.classList.remove("para");
para.classList.add("newPara");