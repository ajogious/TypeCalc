"use strict";
// <========== CALCULATION FUNCTION ==========> //
function calculate(operation) {
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const resultDiv = document.getElementById("result");
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers!");
        return;
    }
    let result;
    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            if (num2 === 0) {
                alert("Divison by zero(0) not valid!");
                return;
            }
            result = num1 / num2;
            break;
    }
    resultDiv.textContent = `Result: ${result}`;
}
// <========== RESET FUNCTION ==========> //
function resetForm() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = "Result: ";
}
