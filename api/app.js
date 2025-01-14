const URL = "https://cat-fact.herokuapp.com/facts";
const btn = document.querySelector("#btn");
const factPara = document.querySelector("#fact");

const getFacts = async () => {
    console.log('getting data ...')
    let response = await fetch(URL);
    console.log(response);//JSON format

    let data = await response.json();
    factPara.innerText = data[3].text;
};

btn.addEventListener('click', getFacts);