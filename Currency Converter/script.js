const currency = document.querySelectorAll(".amount")
const amount = document.getElementById("currentval")
const converted = document.getElementById("convertvalue")
const button = document.getElementById("btn")
const select = document.querySelectorAll("select")

fetch("https://api.frankfurter.app/currencies")
    .then(response => response.json())
    .then(data => displayCurrency(data))
    .catch(error => console.error(error))
    
function displayCurrency(data) {
    let obj = Object.entries(data)
    for (let i=0; i<obj.length; i++){
        const option = `<option value=${obj[i][0]}>${obj[i][0]}</option>`
        select[0].innerHTML += option
        select[1].innerHTML += option

    }
}

button.addEventListener("click", () => {
    let currency1 = select[0].value
    let currency2 = select[1].value
    let amountval = amount.value

    if (currency1 === currency2)
        alert("You are converting the same currency")
    else
        convertcurrency(currency1, currency2, amountval)
})

function convertcurrency(currency1, currency2, amountval) {
    fetch(`https://api.frankfurter.app/latest?base=${currency1}&symbols=${currency2}`)
    .then((resp) => resp.json())
    .then((data) => {
        const convertedAmount = (amountval * data.rates[currency2]).toFixed(2);
        converted.value = convertedAmount
    });
}
