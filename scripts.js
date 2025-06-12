const convertButton = document.querySelector(".button")


function convertValues(){

    const inputValue = document.querySelector(".input-currency").value
    const correnteValueToConvert = document.querySelector("#toConvert")
    const correncyvalueConverted = document.querySelector("#converted")

    const dolarToday = 5.25

    const convertedValue = inputValue / dolarToday

    correnteValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}). format(inputValue)
    correncyvalueConverted.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}). format(convertedValue)

    console.log(convertedValue)
}

convertButton.addEventListener("click", convertValues)