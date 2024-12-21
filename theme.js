let body = document.querySelector(".body");
let theme = "light";
let button = document.querySelector(".button");




const changeTheme = () => {
    if (theme === "light") {
        body.style.backgroundColor = "black";
        button.innerHTML = "light";
        theme = "dark";
    } else if (theme === "dark") {
        body.style.backgroundColor = "white";
        button.innerHTML = "dark";
        theme = "light";
    }
}



/* 
//CONDITIONALS
let num = prompt("Enter a number: ");
num = parseInt(num);
if (num % 5 ===0){
    body.style.backgroundColor = "cyan";
} 
*/



/*
//STRINGS
let fullName = window.prompt("Enter full name: ");

let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1, fullName.length + 1);

let letter = firstName.charAt(0);
letter = letter.toLowerCase();
let ext = firstName.slice(1);
firstName = letter + ext;

letter = lastName.charAt(0);
letter = letter.toLowerCase();
ext = lastName.slice(1);
lastName = letter + ext;

usrName = firstName + lastName;
let len = usrName.length;

usrName = usrName + len;

let txt = document.querySelector(".p");
txt.innerText= `Your Username is: @${usrName}`;
*/



/*
//STRINGS
let fullName = window.prompt("Enter full name: ");
fullName = fullName.trim();
fullName = fullName.toLowerCase();
let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1, fullName.length + 1);

let usrName = firstName + lastName;
let leng = usrName.length;
usrName = usrName + leng;

let txt = document.querySelector(".p");
txt.innerText= `Your Username is: @${usrName}`;
*/



let prices = [250, 645, 300, 900, 50];

for (let i = 0; i < prices.length; i++) {
    prices[i] = prices[i] * (1 - 0.1);
}

console.log(prices);


let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.splice(0,1);//deletes the element of index - 0
console.log(companies);

companies.splice(1, 1, "Ola");
console.log(companies);

companies.splice(5, 0, "Amazon");
console.log(companies);


const arrowSum  = (a, b) => {
    return a + b;
}

let sum = arrowSum(5, 7);
console.log(sum);



//Practice Problem - 3
function cntVowels (str) {
    let cnt = 0;
    str = str.toLowerCase();
    for (let s of str) {
        if (s === 'a' || s === 'e' || s === 'i' || s === 'o' || s === 'u') {
            cnt++;
        }
    }

    return cnt;
}

let string = "Moinul Is An errormaker."; 
let numOfVowels = cntVowels(string);
console.log(`Number of vowels in "${string}" = ${numOfVowels}`);


//Practice Problem - 3 using Arrow Function
const countVowels = (str) => {
    let cnt = 0;
    str = str.toLowerCase();
    for (let s of str) {
        if (s === 'a' || s === 'e' || s === 'i' || s === 'o' || s === 'u') {
            cnt++;
        }
    }

    return cnt;
}

let numberOfVowels = countVowels(string);
console.log(`Number of vowels in "${string}" = ${numberOfVowels}`);



