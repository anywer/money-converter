const convertButton = document.querySelector(".button")
const currencySelect = document.querySelector(".select-currency")
const currencyConvert = document.querySelector(".currency-to-convert")

function convertValues() {

    const inputValue = document.querySelector(".input-currency").value
    const correnteValueToConvert = document.querySelector("#toConvert")
    const correncyvalueConverted = document.querySelector("#converted")

    console.log(currencySelect.value)
    const dolarToday = 5.25
    const euroToday = 6.41
    const realToday = 1.00

    const taxas = {
        "US$": 5.25,
        "€": 6.41,
        "R$": 1.00
    }


    const taxaSeleionada = taxas[currencyConvert.value]

    if (currencySelect.value === "US$") {
        correncyvalueConverted.innerHTML = new Intl.NumberFormat("en-US",
            { style: "currency", currency: "USD" })
            .format(inputValue * taxaSeleionada / taxas ["US$"])

    }

    if (currencySelect.value === "€") {
        correncyvalueConverted.innerHTML = new Intl.NumberFormat("de-DE",
            { style: "currency", currency: "EUR" })
            .format(inputValue * taxaSeleionada / taxas ["€"])


    }

     if (currencySelect.value === "R$") {
        correncyvalueConverted.innerHTML = new Intl.NumberFormat("pt-BR",
            { style: "currency", currency: "BRL" })
            .format(inputValue * taxaSeleionada / taxas ["R$"])


    }

    //conversão da moeda a ser convertida//

    if (currencyConvert.value == "US$") {
        correnteValueToConvert.innerHTML = new Intl.NumberFormat("en-US",
            { style: "currency", currency: "USD" })
            .format(inputValue)


    }

    if (currencyConvert.value == "€") {
        correnteValueToConvert.innerHTML = new Intl.NumberFormat("de-DE",
            { style: "currency", currency: "EUR" })
            .format(inputValue)

    }

    if (currencyConvert.value == "R$") {
        correnteValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",
            { style: "currency", currency: "BRL" })
            .format(inputValue)
    }



  
}

function changeCurrency() {
    const currencyName = document.querySelector("#currency-name")
    const currencyImg = document.querySelector(".currency-Img")

    if (currencySelect.value == "US$") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/dolar.png"
    }

    if (currencySelect.value == "€") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if (currencySelect.value == "R$") {
        currencyName.innerHTML = "Real Brasileiro"
        currencyImg.src = "./assets/real.png"
    }

    convertValues()
}

function currencyToConvert() {
    const currencyNameConvert = document.querySelector("#toConvertName")
    const currencyImgConvert = document.querySelector("#toConvertImg")

    if (currencyConvert.value == "R$") {
        currencyNameConvert.innerHTML = "Real Braisileiro"
        currencyImgConvert.src = "./assets/real.png"
    }

    if (currencyConvert.value == "US$") {
        currencyNameConvert.innerHTML = "Dolar Americano"
        currencyImgConvert.src = "./assets/dolar.png"
    }

    if (currencyConvert.value == "€") {
        currencyNameConvert.innerHTML = "Euro"
        currencyImgConvert.src = "./assets/euro.png"
    }

convertValues()
}


currencySelect.addEventListener("change", changeCurrency)
currencyConvert.addEventListener("change", currencyToConvert)
convertButton.addEventListener("click", convertValues)
