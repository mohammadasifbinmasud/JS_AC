//MAP Method//
//P - 1 --> Square Every Element
let h1 = document.querySelector(".h1");
let arr1 = [5, 7, 9, 0, 32];
let results = arr1.map((val) => {
    return val ** 2;
});
h1.innerHTML = `Squared array = [${results}]`;



//P - 2 --> Convert Temperature (Celsius to Fahrenheit)
let h2 = document.querySelector(".h2");
let arr2 = arr1;
let fahrenheit = arr2.map((val) => {
    return val * (9/5) + 32;
});

h2.innerHTML = `Farenheit = [${fahrenheit}]`;


//P - 3 --> Add Prefix to Strings
let h3 = document.querySelector(".h3");
let arr3 = ["Moin", "Ahmed", "Tahsin"];
let names = arr3.map((name) => {
    return "Mr. " + name;
});

h3.innerHTML = `Names = [${names}]`;


//P - 4 --> Extract First Letters
let h4 = document.querySelector(".h4");
let arr4 = ["apple", "banana", "mango", "orange"];
let fruits = arr4.map((fruit) => {
    return fruit[0];
});

h4.innerHTML = `First letters of Fruits = [${fruits}]`;


//P - 5 --> Double Even Numbers
let h5 = document.querySelector(".h5");
let arr5 = arr1;
let evenNums = arr5.map((num) => {
    return num % 2 === 0 ? num * 2: num;
});

h5.innerHTML = `Doubled values = [${evenNums}]`;


//








































const max = arr.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
});

h.innerHTML = `<h1>max = ${max}`;

