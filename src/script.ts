// <========== CALCULATION FUNCTION ==========> //
function calculate(
  operation: "add" | "subtract" | "multiply" | "divide"
): void {
  const num1Input = document.getElementById("num1") as HTMLInputElement;
  const num2Input = document.getElementById("num2") as HTMLInputElement;
  const resultDiv = document.getElementById("result") as HTMLElement;

  const num1: number = parseFloat(num1Input.value);
  const num2: number = parseFloat(num2Input.value);

  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers!");
    return;
  }

  let result: number;

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
function resetForm(): void {
  (document.getElementById("num1") as HTMLInputElement).value = "";
  (document.getElementById("num2") as HTMLInputElement).value = "";
  const resultDiv = document.getElementById("result") as HTMLElement;
  resultDiv.textContent = "Result: ";
}
