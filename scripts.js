const convertButton = document.querySelector(".button")
const currencySelect = document.querySelector(".select-currency")

function convertValues() {

    const inputValue = document.querySelector(".input-currency").value
    const correnteValueToConvert = document.querySelector("#toConvert")
    const correncyvalueConverted = document.querySelector("#converted")

    console.log(currencySelect.value)
    const dolarToday = 5.25
    const euroToday = 5.60

    const convertedValue = inputValue / dolarToday

    if (currencySelect.value === "US$") {
        correncyvalueConverted.innerHTML = new Intl.NumberFormat("en-US",
            { style: "currency", currency: "USD" })
            .format(inputValue / dolarToday)

    }

    if (currencySelect.value === "€") {
        correncyvalueConverted.innerHTML = new Intl.NumberFormat("de-DE",
            { style: "currency", currency: "EUR" })
            .format(inputValue / euroToday)


    }

    correnteValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(inputValue)


    console.log(convertedValue)
}

function changeCurrency() {
    const currencyName = document.querySelector("#currency-name")
    const currencyImg = document.querySelector(".currency-Img")

    if (currencySelect.value == "US$") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src ="./assets/dolar.png"
    }

    if (currencySelect.value == "€") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    convertValues()
}

currencySelect.addEventListener("change", changeCurrency )
convertButton.addEventListener("click", convertValues)