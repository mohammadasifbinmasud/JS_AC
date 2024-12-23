//ATTRIBUTES
let ndiv = document.querySelector(".ndiv");
console.log(ndiv.getAttribute("class"));

// para.setAttribute("class", "newPara");


//STYLE
ndiv.style.border = "2px solid black";
ndiv.style.backgroundColor = "black";
ndiv.style.color = "white";
ndiv.style.display = "inline";



//INSERT ELEMENTS
let div = document.createElement("div");
div.innerText = "This is a dynamic div";
div.style.color = "red";
div.backgroundColor = "green";


ndiv.append(div);
// ndiv.prepend(div);
// ndiv.before(div);
// ndiv.after(div);


//DELETE
div.remove();