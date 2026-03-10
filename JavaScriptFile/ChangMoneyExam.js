function switchMoney(){
    let amount = document.getElementById("amount").value;
    let fromCurrency = document.getElementById("fromCurrency").value;
    let toCurrency = document.getElementById("toCurrency").value;
    console.log("Số tiền: " + amount + " | Từ: " + fromCurrency + " | Sang: " + toCurrency);

    let finalAmount = changeMoney(amount,fromCurrency,toCurrency);

    let hiddenText = document.getElementById("hiddenText");
    hiddenText.innerText = `Số tiền: ${finalAmount}`;
}

function changeMoney(amount,fromCurrency,toCurrency){
    let amountNumber = parseFloat(amount);
    const exchangeRates = {
        "USD": 1,
        "EUR": 0.95,
        "VND": 25000
    };
    let amountInUSD = amountNumber / exchangeRates[fromCurrency];
    return amountInUSD * exchangeRates[toCurrency];
}