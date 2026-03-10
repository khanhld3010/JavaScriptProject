let opp = document.getElementsByName("operation");


function calculate() {
    let firstNumber = document.getElementById("firstNumber").value;
    console.log(firstNumber);
    let secondNumber = document.getElementById("secondNumber").value;
    let operation = event.submitter.value;
    let result = 0;
    if (operation === "add") {
        result = firstNumber + secondNumber;
    }
    else if (operation === "sub") {
        result = firstNumber - secondNumber;
    }
    else if (operation === "mul") {
        result = firstNumber * secondNumber;
    }
    else if (operation === "div") {
        result = firstNumber / secondNumber;
    }

    let hiddenText = document.getElementById("hiddenText");
    hiddenText.innerText = `Kết quả: ${result}`;


}